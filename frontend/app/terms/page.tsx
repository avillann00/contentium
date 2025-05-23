'use client'

import { useRouter } from 'next/navigation'

export default function Terms(){
  const router = useRouter()

  return(
    <div className='w-screen min-h-screen bg-blue-50 flex flex-col'>
      <div className='bg-white text-black text-center gap-8 px-4 py-4'>
        <h1>Terms of Service</h1>
        <p>Last updated: May 23, 2025</p>

        <h2>1. Agreement to Terms</h2>
        <p>
          These Terms of Service ("Terms", "Agreement") are an agreement between Contentium ("Company", "we", "our", or "us") and you ("User", "you", or "your"). This Agreement sets forth the general terms and conditions of your use of the Contentium web application and any of its products or services (collectively, "Service").
        </p>

        <h2>2. Services Provided</h2>
        <p>
          Contentium is a dashboard tool that connects to your social media accounts to provide centralized analytics and insights using AI-powered tools. You can connect accounts, analyze engagement, view performance metrics, and receive content suggestions.
        </p>

        <h2>3. Accounts</h2>
        <p>
          When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.
        </p>

        <h2>4. Use of Third-Party Services</h2>
        <p>
          The Service integrates with third-party social media platforms including but not limited to Instagram, Twitter/X, TikTok, YouTube, and Facebook. By using Contentium, you authorize us to access and use your data from these services in accordance with their respective APIs and our Privacy Policy.
        </p>

        <h2>5. Prohibited Uses</h2>
        <p>
          You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
        </p>
        <ul className='list-disc text-left pl-5'>
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>To exploit, harm, or attempt to exploit or harm minors.</li>
          <li>To transmit or procure the sending of any advertising or promotional material without our prior written consent.</li>
          <li>To impersonate or attempt to impersonate Contentium, a Contentium employee, another user, or any other person or entity.</li>
        </ul>

        <h2>6. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.
        </p>
        <p>
          Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          The Service and its original content, features and functionality are and will remain the exclusive property of Contentium and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          In no event shall Contentium, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
        </p>
        <ul className='list-disc text-left pl-5'>
          <li>Your access to or use of or inability to access or use the Service.</li>
          <li>Any conduct or content of any third party on the Service.</li>
          <li>Any content obtained from the Service.</li>
          <li>Unauthorized access, use or alteration of your transmissions or content.</li>
        </ul>

        <h2>9. Disclaimer</h2>
        <p>
          Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions.
        </p>

        <h2>11. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        <p>
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have any questions about these Terms, you can contact us at: support@contentium.app
        </p>
        <button 
          className='bg-green-100 hover:bg-green-300 py-4 px-4 rounded-lg shadow-md w-1/4'
          onClick={() => router.push('/')}
        >
          Go home
        </button>
      </div>
    </div>
  )
}

