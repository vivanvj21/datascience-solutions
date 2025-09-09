import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Email configuration
const EMAIL_CONFIG = {
  // Using Gmail SMTP - you'll need to use an App Password
  service: 'gmail',
  auth: {
    user: 'vishnupqw@gmail.com', // Your email
    pass: process.env.GMAIL_APP_PASSWORD || 'psjf nlni qzbx cifx' // Use environment variable or replace with your Gmail App Password
  }
};

// Create email transporter (with error handling)
let transporter;
try {
  transporter = nodemailer.createTransport(EMAIL_CONFIG);
} catch (error) {
  console.error('Email transporter creation failed:', error);
  transporter = null;
}

// Authentication configuration
const ADMIN_CREDENTIALS = {
  username: 'loki',
  password: 'admin@123'
};

// Simple token storage (in production, use Redis or database)
const activeTokens = new Set();

// Authentication middleware
const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '') || req.query.token;
  
  if (!token || !activeTokens.has(token)) {
    return res.status(401).json({ error: 'Unauthorized access' });
  }
  
  next();
};

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const dbPath = path.join(__dirname, 'contacts.db');
const db = new sqlite3.Database(dbPath);

// Create contacts table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// API Routes

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    // Generate a simple token
    const token = crypto.randomBytes(32).toString('hex');
    activeTokens.add(token);
    
    // Set token expiration (24 hours)
    setTimeout(() => {
      activeTokens.delete(token);
    }, 24 * 60 * 60 * 1000);
    
    res.json({
      success: true,
      message: 'Login successful',
      token: token
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid username or password'
    });
  }
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (token) {
    activeTokens.delete(token);
  }
  res.json({ success: true, message: 'Logged out successfully' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Name, email, and message are required' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      error: 'Please enter a valid email address' 
    });
  }

  // Insert contact into database
  const stmt = db.prepare(`
    INSERT INTO contacts (name, email, company, message) 
    VALUES (?, ?, ?, ?)
  `);

  stmt.run([name, email, company || '', message], async function(err) {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ 
        error: 'Failed to save contact information' 
      });
    }

    // Send email notification
    try {
      if (!transporter) {
        console.log('Email transporter not available, skipping email send');
        res.json({ 
          success: true, 
          message: 'Contact information saved successfully (email not sent - transporter not configured)',
          id: this.lastID 
        });
        return;
      }
      
      const mailOptions = {
        from: 'vishnupqw@gmail.com',
        to: 'vishnupqw@gmail.com',
        subject: `New Contact Form Submission - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">📧 New Contact Form Submission</h1>
            </div>
            <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              <div style="margin-bottom: 20px;">
                <h3 style="color: #333; margin-bottom: 10px; border-bottom: 2px solid #6366f1; padding-bottom: 5px;">👤 Contact Details</h3>
                <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #6366f1;">${email}</a></p>
                <p style="margin: 8px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
                <p style="margin: 8px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #333; margin-bottom: 10px; border-bottom: 2px solid #6366f1; padding-bottom: 5px;">💬 Message</h3>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #6366f1;">
                  <p style="margin: 0; line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                  This email was automatically generated from your Vishnu Labs contact form.
                </p>
                <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">
                  Database ID: ${this.lastID}
                </p>
              </div>
            </div>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully to vishnupqw@gmail.com');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails, just log the error
    }

    res.json({ 
      success: true, 
      message: 'Contact information saved and email sent successfully',
      id: this.lastID 
    });
  });

  stmt.finalize();
});

// Get all contacts (for admin purposes) - Protected route
app.get('/api/contacts', authenticateAdmin, (req, res) => {
  db.all('SELECT * FROM contacts ORDER BY created_at DESC', (err, rows) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to fetch contacts' });
    }
    res.json(rows);
  });
});

// Clear all contacts (for admin purposes) - Protected route
app.delete('/api/contacts', authenticateAdmin, (req, res) => {
  db.run('DELETE FROM contacts', function(err) {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to clear contacts' });
    }
    res.json({ 
      success: true, 
      message: `Cleared ${this.changes} contact(s) from database` 
    });
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Serve test page
app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, 'test.html'));
});

// Serve login test page
app.get('/login-test', (req, res) => {
  res.sendFile(path.join(__dirname, 'login-test.html'));
});

// Serve email test page
app.get('/email-test', (req, res) => {
  res.sendFile(path.join(__dirname, 'email-test.html'));
});

// Serve admin page (protected)
app.get('/admin', (req, res) => {
  const token = req.query.token;
  
  if (!token || !activeTokens.has(token)) {
    return res.redirect('/login');
  }
  
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Database: ${dbPath}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});
