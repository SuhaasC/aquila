# 🚀 Hostinger Deployment Guide

## Prerequisites
- Hostinger hosting account
- Access to cPanel or File Manager
- Node.js support (if available)

## 📦 Files to Upload

### Option 1: Full Project Upload (Recommended)
Upload the entire project folder to your Hostinger hosting:

```
aquila/
├── .next/           # Build output (required)
├── app/             # Next.js app directory
├── components/      # React components
├── lib/            # Utility functions
├── public/         # Static assets
├── package.json    # Dependencies
├── next.config.ts  # Next.js configuration
├── tailwind.config.js # Tailwind CSS config
└── README.md       # Documentation
```

### Option 2: Production Build Only
If you prefer to upload just the production files:

```
aquila/
├── .next/          # Production build
├── public/         # Static assets
└── package.json    # Dependencies
```

## 🔧 Hostinger Setup

### 1. Upload Files
1. **Login to Hostinger cPanel**
2. **Go to File Manager**
3. **Navigate to `public_html` folder**
4. **Upload your project files**

### 2. Install Dependencies
If your Hostinger plan supports Node.js:

```bash
# SSH into your hosting (if available)
ssh u123456789@your-domain.com

# Navigate to project directory
cd public_html/aquila

# Install dependencies
npm install --production

# Start the application
npm start
```

### 3. Alternative: Static Hosting
If Node.js is not available, you can use the static files:

1. **Upload the `.next/static` folder to `public_html`**
2. **Upload all images from `public/` to `public_html`**
3. **Create a simple `index.html` redirect**

## 🌐 Domain Configuration

### 1. Point Domain to Hostinger
- Update your domain's nameservers to Hostinger's
- Or update A records to point to Hostinger's IP

### 2. SSL Certificate
- Hostinger provides free Let's Encrypt SSL
- Enable HTTPS in cPanel

## 📱 Performance Optimization

### 1. Enable Gzip Compression
In `.htaccess` file:
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

### 2. Browser Caching
```apache
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## 🔍 Troubleshooting

### Common Issues:

1. **500 Internal Server Error**
   - Check `.htaccess` file
   - Verify file permissions (644 for files, 755 for folders)

2. **Images Not Loading**
   - Verify `public/` folder is uploaded
   - Check file paths in components

3. **Styling Issues**
   - Ensure `tailwind.config.js` is uploaded
   - Check CSS build files in `.next/static/css/`

### File Permissions:
```bash
# Files
chmod 644 *.html *.css *.js *.png *.jpg *.gif

# Folders
chmod 755 */
```

## 📞 Support

If you encounter issues:
1. Check Hostinger's error logs
2. Verify all files are uploaded correctly
3. Test locally before uploading
4. Contact Hostinger support if needed

## 🎯 Next Steps

After successful deployment:
1. **Test all pages and functionality**
2. **Verify contact forms work**
3. **Check mobile responsiveness**
4. **Test loading speed**
5. **Verify SSL certificate**

---

**Good luck with your deployment! 🚀**
