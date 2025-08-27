<?php
/**
 * Aquilastrat Website Entry Point
 * This file ensures Hostinger recognizes the project
 */

// Set content type to HTML
header('Content-Type: text/html; charset=utf-8');

// Redirect to the Next.js application
// If you have a static export, this will serve your main page
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aquilastrat - Strategic Partners for Leaders Who Move Markets</title>
    <meta name="description" content="Strategic consulting and data management services for founders and executives. Understated strategy that delivers results.">
    
    <!-- Redirect to main application -->
    <meta http-equiv="refresh" content="0; url=/app/page" />
    
    <!-- Fallback content -->
    <style>
        body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            padding: 50px; 
            background: linear-gradient(135deg, #002060 0%, #1e3a8a 100%);
            color: white;
            margin: 0;
        }
        .container { max-width: 600px; margin: 0 auto; }
        .logo { font-size: 2.5em; margin-bottom: 20px; color: #D4AF37; }
        .tagline { font-size: 1.2em; margin-bottom: 30px; }
        .loading { font-size: 1em; opacity: 0.8; }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">Aquilastrat</div>
        <div class="tagline">Strategic Partners for Leaders Who Move Markets</div>
        <div class="loading">Loading your website...</div>
        <p>If you're not redirected automatically, <a href="/app/page" style="color: #D4AF37;">click here</a></p>
    </div>
</body>
</html>
