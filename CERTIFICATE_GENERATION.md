# Certificate Generation Instructions

## How to Generate Certificates

1. **Temporary Access to Certificate Generator:**
   - Open `src/App.js`
   - Temporarily replace the content to show the CertificateGenerator component:
   ```jsx
   import CertificateGenerator from './components/CertificateGenerator';
   
   function App() {
     return <CertificateGenerator />;
   }
   ```

2. **Generate Certificates:**
   - Run your development server: `npm start`
   - Navigate to the app in your browser
   - Click the "Generate All Certificates" button
   - All 8 certificates will be downloaded to your Downloads folder

3. **Move Certificates to Images Folder:**
   - Locate the downloaded certificate files in your Downloads folder:
     - `react-certificate.png`
     - `javascript-certificate.png`
     - `botpress-certificate.png`
     - `nodejs-certificate.png`
     - `react-native-certificate.png`
     - `web-design-certificate.png`
     - `fullstack-certificate.png`
     - `ai-bot-certificate.png`
   - Copy all these files to `src/images/` folder

4. **Update Certs Component:**
   - Open `src/components/Certs.js`
   - Replace the placeholder image constants with actual imports:
   ```jsx
   import reactCert from '../images/react-certificate.png';
   import jsCert from '../images/javascript-certificate.png';
   import botpressCert from '../images/botpress-certificate.png';
   import nodejsCert from '../images/nodejs-certificate.png';
   import reactNativeCert from '../images/react-native-certificate.png';
   import webDesignCert from '../images/web-design-certificate.png';
   import fullstackCert from '../images/fullstack-certificate.png';
   import aiBotCert from '../images/ai-bot-certificate.png';
   ```

5. **Restore App.js:**
   - Restore the original `src/App.js` content
   - Remove the CertificateGenerator import

6. **Remove CertificateGenerator Component (Optional):**
   - After generating certificates, you can delete `src/components/CertificateGenerator.js` if you no longer need it

## Certificate Information

The certificates are generated with the following information:
- **Name:** Emmanuel Oppong Coffie
- **Certificates:** 8 professional certifications covering Web Development, AI/Bots, Mobile Development
- **Issuers:** Meta, freeCodeCamp, BotPress, Udemy, Takoradi Technical University, Gupshup

## Notes

- Certificates are generated as high-quality PNG images (1400x1000px)
- Each certificate includes professional design with borders, decorative elements, and proper formatting
- Certificates can be customized by editing the `certificates` array in `CertificateGenerator.js`

