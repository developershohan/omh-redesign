// Verbatim body copy from the live legacy pages (docs/legacy-pages-plan.md Phase 1).
// Wording must not be edited — only re-typeset into this site's components.

export type LegalBlock = string | { list: string[] };
export type LegalSection = { heading: string; body: LegalBlock[] };
export type LegalDoc = { title: string; intro: string; sections: LegalSection[] };

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  intro:
    "Online Marketing Help (“We”) are committed to protecting and respecting your privacy.",
  sections: [
    {
      heading: "Introduction",
      body: [
        "This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting www.thecma.co.uk you are accepting and consenting to the practices described in this policy.",
        "For the purpose of the General Data Protection Regulation 2018, the data controller is Online Marketing Help of The Hut, Central Ave, Hullbridge, Hockley SS5 6AU who can be contacted using the following email address: support@onlinemarketinghelp.co.uk",
      ],
    },
    {
      heading: "Scope",
      body: [
        "This statement applies to the following:",
        {
          list: [
            "Personal information we collect through our website.",
            "Personal information we collect about you in the course of doing business with you, such as when you engage with us a customer, potential customer, supplier, service provider, professional advisor, consultant or other third party in relation to the provision of our services and the operation of our business generally.",
          ],
        },
      ],
    },
    {
      heading: "Information We Collect From You",
      body: [
        "We will collect and process the following data about you:",
        "Information you provide to us through our website.",
        "This is information about you that you give us by filling in forms on www.thecma.co.uk (our site). It includes information you provide when you register to use our site, search for a service, request information, participate in discussion boards or other social media functions on our site, and when you report a problem with our site. The information you give us may include your name, address, e-mail address and phone number, details of your business activities.",
        "You can choose not to provide this information by not entering it when prompted to do so. If you do not provide us with some or all of the requested information we may not be able to provide the requested information or service to you.",
        "Information customers and potential customers provide to us",
        "You may choose to provide personal information when engaging in or conducting business with us. The types of information we may collect include names, email addresses, postal addresses, contact details, job titles, transactional information, financial/billing information, account information, correspondence and any other information you may choose to provide.",
        "Other information we collect in the course of operating our business",
        "We also collect information from our suppliers, service providers, agents, consultants, business partners, professional advisors and other third parties for the purpose of managing and operating our business. For example we will collect business contact information, financial information and other information necessary to engage third parties and to evaluate their performance.",
        "Information We Receive From Other Sources",
        "This is information we receive about you from third parties.",
        "We are working closely with third parties (including, for example, business partners, advertising networks, analytics providers, search information providers, credit reference agencies). We will notify you if and when we receive information about you from them and the purposes for which we intend to use that information.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them see our Cookie Policy.",
      ],
    },
    {
      heading: "Uses Made of the Information",
      body: [
        "We use information held about you in the following ways:",
        {
          list: [
            "to carry out our obligations arising from any contracts/agreements entered into between you and us and to provide you with the information and services that you request from us;",
            "to provide you with information about events and services we think may be of interest to you;",
            "to process and complete business transactions and send related information, including transaction confirmation and invoices; to notify you about changes to our service;",
            "to ensure that content from our site is presented in the most effective manner for you and for your computer.",
          ],
        },
        "If we are not able to process your personal data whether because you do not consent, you withdraw or limit consent, or for any other reason then we will not be able to achieve the purposes listed above.",
      ],
    },
    {
      heading: "Disclosure of Your Information",
      body: [
        "We do not sell your personal information to any third parties; however we may share your personal information with third parties as follows:",
        {
          list: [
            "Selected other parties including: business partners, suppliers and sub-contractors for the performance of any contract we enter into with them or you;",
            "analytics and search engine providers that assist us in the improvement and optimisation of our site; credit reference agencies for the purpose of assessing your credit score where this is a condition of us entering into a contract with you.",
          ],
        },
        "We will disclose your personal information to third parties:",
        {
          list: [
            "In the event that we sell or buy any business or assets, in which case we will disclose your personal data to the prospective seller or buyer of such business or assets.",
            "If The Creative Marketing Agency or substantially all of its assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets.",
            "If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use and other agreements; or to protect the rights, property, or safety of The Creative Marketing Agency, our customers, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.",
          ],
        },
      ],
    },
    {
      heading: "Where We Store Your Personal Data",
      body: [
        "Your personal and sensitive data will only be stored and processed on servers based within the European Economic Area (EEA).",
        "Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.",
      ],
    },
    {
      heading: "Automated Decision Making",
      body: ["We do not use automated decision making including profiling."],
    },
    {
      heading: "Retention of Data",
      body: ["We will only retain your data for as long as we deem reasonable for the purposes outlined above."],
    },
    {
      heading: "Your Rights",
      body: [
        "We will only process your data for marketing purposes where you have given express consent to us to do so or where there is a legitimate interest for us to do so. The legitimate interests that we will rely on are as listed above under “Uses made of the information”. In any event, we will only rely on legitimate interest as a grounds for processing your data where we have completed a Legitimate Interest Assessment and where such assessment supports the use of such data processing.",
        "At any time, even if you have previously consented, you have the right to ask us not to process your personal data for marketing purposes and/or not to disclose it to third parties for marketing purposes. You can do this by contacting us using the following email address: support@onlinemarketinghelp.co.uk",
        "You can also use this email address to notify us of any preferences you have in relation to the processing of your data for example as to the frequency of communications that you receive from us or the manner or the subject matter of such communications.",
        "The General Data Protection Regulation 2018 also gives you the following rights:",
        {
          list: [
            "to access information held about you;",
            "to request the deletion or correction of information held about you;",
            "to object to or restrict the processing of information about you;",
            "to request that information about you be transferred to another person;",
            "to complain to the relevant supervisory authority. In the UK this is the Information Commissioner’s Office (ICO) https://ico.org.uk/ whose contact details are as follows:",
          ],
        },
        "Information Commissioner’s Office\nWycliffe House, Water Lane, Wilmslow ,Cheshire SK9 5AF",
        "You can exercise these rights by contacting us using the following contact details support@onlinemarketinghelp.co.uk",
      ],
    },
    {
      heading: "Third Party Sites",
      body: [
        "Our site may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.",
      ],
    },
    {
      heading: "Changes to Our Privacy Policy",
      body: [
        "Any changes we make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our privacy policy.",
      ],
    },
    {
      heading: "Complaints Procedure",
      body: [
        "If you have any complaints in relation to how our business has processed your data or in relation to the exercise of your rights as detailed above you can in the first instance raise your concerns by contacting us as follows: hello@thecma.co.uk",
        "You may also contact the Information Commissioner’s Office in relation to any such complaints https://ico.org.uk/",
        "Information Commissioner’s Office\nWycliffe House\nWater Lane\nWilmslow\nCheshire\nSK9 5AF",
      ],
    },
    {
      heading: "Contact",
      body: [
        "Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to: support@onlinemarketinghelp.co.uk",
      ],
    },
  ],
};

export const cookiePolicy: LegalDoc = {
  title: "Cookie Policy",
  intro: "Our website uses cookies.",
  sections: [
    {
      heading: "1. Introduction",
      body: [
        "1.1 Our website uses cookies.",
        "1.2 By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.",
      ],
    },
    {
      heading: "2. About Cookies",
      body: [
        "2.1 A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.",
        "2.2 Cookies may be either “persistent” cookies or “session” cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.",
        "2.3 Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.",
      ],
    },
    {
      heading: "3. Cookies That We Use",
      body: [
        "3.1 We use cookies for the following purposes:",
        {
          list: [
            "(a) authentication – we use cookies to identify you when you visit our website and as you navigate our website;",
            "(b) status – we use cookies to help us to determine if you are logged into our website;",
            "(c) personalisation – we use cookies to store information about your preferences and to personalise the website for you;",
            "(d) security – we use cookies as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials, and to protect our website and services generally;",
            "(e) analysis – we use cookies to help us to analyse the use and performance of our website and services; and",
            "(f) cookie consent – we use cookies to store your preferences in relation to the use of cookies more generally.",
          ],
        },
      ],
    },
    {
      heading: "4. Cookies Used by Our Service Providers",
      body: [
        "4.1 Our service providers use cookies and those cookies may be stored on your computer when you visit our website.",
        "4.2 We use Google Analytics to analyse the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered relating to our website is used to create reports about the use of our website. Google’s privacy policy is available at: https://www.google.com/policies/privacy/.",
        "4.3 We use dotMailer to mas broadcast emails. This service uses cookies for tracking purposes. You can view the privacy policy of this service provider at https://www.dotmailer.com/terms/cookie-policy/",
      ],
    },
    {
      heading: "5. Managing Cookies",
      body: [
        "5.1 Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via these links:",
        {
          list: [
            "(a) https://support.google.com/chrome/answer/95647?hl=en (Chrome);",
            "(b) https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences (Firefox);",
            "(c) http://www.opera.com/help/tutorials/security/cookies/ (Opera);",
            "(d) https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies (Internet Explorer);",
            "(e) https://support.apple.com/kb/PH21411 (Safari); and",
            "(f) https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy (Edge).",
          ],
        },
        "5.2 Blocking all cookies will have a negative impact upon the usability of many websites.",
        "5.3 If you block cookies, you will not be able to use all the features on our website.",
      ],
    },
    {
      heading: "6. Our Details",
      body: [
        "6.1 This website is owned and operated by Birthsop ltd.",
        "6.2 We are registered in England and Wales under registration number 12328533, and our registered office is at The Hut, Central Ave, Hullbridge, Hockley SS5 6AU",
        "6.3 Our principal place of business is at 5 Turnpike Lane, Horsham, RH12 0BD",
        "6.4 You can contact us:",
        {
          list: [
            "(a) by post, using the postal address given above;",
            "(b) using our website contact form; https://onlinemarketinghelp.co.uk/contact-us/",
            "(c) by telephone, on the contact number published on our website from 9AM to 5.30PM; or",
            "(d) by email, using the email address published on our website from 9AM to 5.30PM.",
          ],
        },
      ],
    },
  ],
};

export const termsAndConditions: LegalDoc = {
  title: "Terms & Conditions",
  intro:
    "The following terms and conditions refer to Online Marketing Help Limited trading as Online Marketing Help (“The Agency”) and its relationship with its clients and potential clients.",
  sections: [
    {
      heading: "General Terms & Conditions of Business — 1. Quotes & Prices",
      body: [
        {
          list: [
            "1.1. All quotes/estimates are valid for 30 days from the date of submission.",
            "1.2. Quotes/estimates are based on the information provided by the Client, including but not limited to detail on quantities, structure, scope and functionality. Any quote/estimate may therefore be subject to change should the client’s requirements change at any time.",
            "1.3. Unless otherwise stated, photography, stock images, delivery, copywriting and VAT will be charged extra.",
            "1.4. If the contract or hourly price has not been fixed for the term of a contract, our hourly rate of £100 will apply.",
            "1.5. The Agency reserves the right to alter the hourly rate at any time as business needs dictate.",
            "1.6. Quotes/estimates are based on the Agency’s current costs of production and unless otherwise agreed are subject to amendment on or at any time after acceptance to meet any rise or fall in such costs.",
            "1.7. Any estimates given by The Agency as to the time of completion or performance of its services (whether completion of the whole or a part of those services) shall be estimates only and time shall not be of the essence.",
            "1.8. Any stated timescale is reliant upon the client providing all required information/copy/images within the time set out at project initiation.",
          ],
        },
      ],
    },
    {
      heading: "2. Methods",
      body: [
        {
          list: [
            "2.1. The Agency reserves the right to sub-contract the fulfilment of an order or any part thereof.",
            "2.2. Any images supplied electronically will be incorporated into designs without charge provided that they are of suitable quality. All images need to be supplied as EPS illustrator vectors for logos and Photoshop tiffs (300dpi min) for pictures. Any logos that need to be re-drawn will be charged extra at our hourly rate. All supplied images requiring scanning or alterations to be charged at £20 per image. Images sourced from external image libraries may incur additional licence/royalty charges payable by the Client.",
            "2.3. Should the Client supply text, artwork or images, the Agency is not obliged to edit, check or guarantee the correctness thereof in any way whatsoever, and the end product shall be made at the entire risk of the Client.",
            "2.4. The Agency shall be indemnified by the Client in respect of any claims, costs and expenses arising out of any libellous matter or any infringement of copyright, patent design or any other proprietary or personal rights contained in any material supplied by the Client. The indemnity shall extend to any amounts paid on a lawyer’s advice in settlement of any claim.",
            "2.5. Origination and/or conceptual work and any copyright subsisting therein shall remain the property of the Agency unless otherwise agreed in writing with the Client.",
            "2.6. The Client’s property and property supplied to the Agency on behalf of the Client, while it is in the possession of the Agency or in transit to or from the Client, will be deemed to be at Client’s risk unless otherwise agreed and the Client should insure accordingly.",
            "2.7. The Agency may charge rent for storage of goods retained at Client’s request, or items left with the Agency before receipt of the order or after notification to the Client of completion of the work.",
            "2.8. When required to expedite project delivery ahead of the time needed for proper production of a given deadline, the Agency shall not be liable for defects occasioned thereby. Should such delivery require payment of overtime wages, delivery charges or other additional costs, all such extras will be for the Client’s account.",
            "2.9. The Agency shall not be required to use, print, upload or hold any matter which in its opinion is or may be of an illegal or libellous nature or an infringement of the proprietary or other rights of a third party.",
          ],
        },
      ],
    },
    {
      heading: "3. Invoices & Payment",
      body: [
        {
          list: [
            "3.1. Payment must be made no more than 30 days after date of invoice unless otherwise agreed in writing in advance.",
            "3.2. We understand and will exercise our statutory right to interest under the Late Payment Of Commercial Debts (Interest) Act 1998 amended by European Directive 2000/35/EC if we are not paid according to these terms.",
            "3.3. All work remains copyrighted to the Agency until settlement of relevant fee account.",
            "3.4. All invoices are subject to UK VAT at the current rate, unless a valid exemption certificate is provided.",
            "3.5. All payments must be in UK Pounds Sterling.",
            "3.6. All work completed after project inception will be billed as it is completed at the end of every calendar month as Work in Progress (WIP) until the conclusion of the project.",
            "3.7. If the Agency incurs any costs as a result of the Client’s neglect or default, the Agency may charge those costs to the Client in addition to the contract price.",
            "3.8. The Client shall pay for any preliminary work which is produced at his/her request, whether experimentally or otherwise. A 50% rejection fee is applicable on all designs executed by the Agency should the Client cancel their contract/order.",
            "3.9. When payment is overdue, the Agency may suspend work, service and/or delivery without notice and without prejudice to any other legal remedy until due payment has been made. Furthermore, any work started but incomplete may be suspended and payment therefore becomes immediately due and payable, notwithstanding anything expressed herein, and any monies in respect of.",
            "3.10. The Agency may require payment in advance, or a deposit of at least 50% of the quote/estimate total prior to instigating work on an order, particularly but not limited to the following situations: new clients; clients with a poor payment history; large, lengthy or complex projects. Where a deposit is required, the balance shall be due upon completion of the work, unless otherwise agreed in writing in advance.",
            "3.11. If your payment is returned by the bank as unpaid for any reason, you will be liable for a charge of £50 for each occurrence.",
          ],
        },
      ],
    },
    {
      heading: "4. Proofing",
      body: [
        {
          list: [
            "4.1. Proofs, pull samples, specimens, sketches, photographs, links or any representation, whether partial or total, of the finished article in whatever form may be submitted to the Client for approval.",
            "4.2. Colour proofing is chargeable at £5 per A3 sheet and £2 per A4 sheet. Mono proofing is chargeable at £2 per A3 sheet and £1 per A4 sheet.",
            "4.3. After approval the Client shall have no claim against the Agency for errors in the exemplar as approved by them.",
          ],
        },
      ],
    },
    {
      heading: "5. Insolvency",
      body: [
        "5.1. If the Client ceases to pay his debts in the ordinary course of business or cannot pay his debts as they become due or is deemed to be unable to pay its debts or have a winding-up petition issued against it or being a person who commits an act of bankruptcy or has a bankruptcy petition issued against him, the Agency without prejudice to other remedies shall:",
        {
          list: [
            "5.1.1. Have the right not to proceed further with the contract or any other work for the Client and be entitled to charge for work already carried out (whether completed or not) and materials purchased for the Client. Such charge to be an immediate debt due to him.",
            "5.1.2. In respect of all unpaid debts due from the Client have a general lieu on all goods and property in its possession (whether worked on or not) and shall be entitled on the expiration of 14 days’ notice to dispose of such goods or property in such manner and at such price as it thinks fit and to apply the proceeds towards such debts.",
          ],
        },
      ],
    },
    {
      heading: "6. Force Majeure",
      body: [
        "6.1. The Agency shall be under no liability if it shall be unable to carry out any provision of the contract for any reason beyond its control including (without limiting the foregoing) Act of God, legislation, war, fire, flood, drought, failure of power supply, lock-out, strike or other action taken by employees in contemplation or furtherance of a dispute or owing to any inability to procure materials required for the performance of the contract. During the continuance of such a contingency the Client may by written notice to the Agency elect ‘to terminate the contract and pay for work done and materials used’, but subject thereto shall otherwise accept delivery when available.",
      ],
    },
    {
      heading: "7. Information Provided by You",
      body: [
        {
          list: [
            "7.1. You warrant that the name, address and payment information provided when you place your order with the Agency will be correct and you agree to notify the Agency of any changes in the name, address and/or payment details.",
            "7.2. You agree that the Agency may disclose your name and address where any enquiries are made.",
            "7.3. You warrant that you possess the legal right and ability to enter into this Agreement and to use the Agency’s services in accordance with this Agreement.",
          ],
        },
      ],
    },
    {
      heading: "8. Indemnity",
      body: [
        "8.1. You shall indemnify us and keep us indemnified and hold us harmless from all liabilities, actions, claims, proceedings, losses, expenses (including reasonable legal costs and expenses), costs and damages, howsoever suffered or incurred by us in consequences of your breach or non-observance of this Agreement, or arising out of claims based upon or relating to our work for you or any claim brought against us by a third party resulting from the provision of any Services to you and your use of them.",
        "8.2. The Agency will notify you promptly of any claim for which the Agency seeks specific indemnification at the currently supplied address. The Agency will afford you the opportunity to participate in the defence of such claim, provided that your participation will not be conducted in a manner prejudicial to the Agency’s interests, as reasonably determined by the Agency and/or its legal representatives.",
      ],
    },
    {
      heading: "9. Limitation of Liability",
      body: [
        "9.1. All conditions, terms, representations and warranties relating to the Services supplied under this Agreement, whether imposed by statute or operation of law or otherwise, that are not expressly stated in these terms and conditions including, without limitation, the implied warranty of satisfactory quality and fitness for a particular purpose are hereby excluded, are subject always to sub clause 1.9.2.",
        "9.2. Nothing in these terms and conditions shall exclude our liability for death or personal injury resulting from our negligence.",
        "9.3. In any event, no claim against the Agency shall be brought unless you have notified the Agency of the claim within one year of the issue arising.",
        "9.4. In no event shall the Agency be liable to you by reason of any representation (unless fraudulent), or any implied warranty, condition or other term, or any duty at common law, for any loss of business, contracts, anticipated savings or profits or any indirect, special or consequential loss, damage, costs, expenses or other claims (whether caused by the Agency’s negligence or the negligence of its servants or agents or otherwise) which arise out of or in connection with the provision of any goods or services by the Agency.",
        "9.5. The Agency warrants that its services will be provided using reasonable care and skill. Where the Agency supplies any goods supplied by a third party, the Agency does not give any warranty, guarantee or other term as to their quality, fitness for purpose or otherwise, but shall, where possible, assign the benefit of any warranty, guarantee or indemnity given by the supplier of the goods to the Agency.",
      ],
    },
    {
      heading: "10. General Terms",
      body: [
        {
          list: [
            "10.1. These conditions and all other express terms of the contract shall be governed and constructed in accordance with the laws of England and you hereby submit to the non-exclusive jurisdiction of the English courts.",
            "10.2. The Agency shall not be liable or deemed to be in breach of contract by reason of any delay in performing, or failure to perform, any of its obligations if the delay or failure was due to any cause beyond its reasonable control.",
            "10.3. All quotes/estimates, briefs and other Client/Agency documents are commercially confidential and may not be disclosed to third parties without prior written agreement.",
            "10.4. These terms and conditions, together with any documents expressly referred to in them, contain the entire Agreement between the Agency and the Client relating to the subject matter covered and supersede any previous agreements, arrangements, undertakings, proposals or contemporaneous communications, written or oral: between the Agency and the Client in relation to such matters. No oral explanation or oral information given by any party shall alter the interpretation of these terms and conditions. In agreeing to these terms and conditions, you confirm that you have not relied on any representation other than those expressly stated in these terms and conditions and you agree that you shall have no remedy in respect of any misrepresentation which has not been expressly made in this Agreement.",
            "10.5. Any notice to be given by either party to the other may be sent by either email or post to the address of the other party as appearing in this Agreement or ancillary application forms or such other address as such party may from time to time have communicated to the other in writing, and if sent by email shall unless the contrary is proved, be deemed to be received on the day it was sent, or if sent by post shall be deemed to be served two days following the date of posting.",
            "10.6. Headings, numbering and summaries are included in this Agreement for convenience only and shall not affect the construction or interpretation of this Agreement.",
            "10.7. You acknowledge that no joint venture, partnership, employment, or agency relationship exists between you and the Agency as a result of your use of these services. You agree not to hold yourself out as a representative, agent or employee of the Agency. You agree that the Agency will not be liable by reason of any representation, act or omission to act by you.",
            "10.8. The Agency reserves the right to revise, alter, modify or amend these terms and conditions, and any of our other policies and agreements at any time and in any manner without prior notification. Notice of any revision, amendment, or modification will be posted in accordance with our Terms and Conditions.",
            "10.9. If any of the provisions of this Agreement are judged to be illegal or unenforceable, the remainder shall continue in full force and the effect of the remainder of them will be not be deemed to be prejudiced.",
            "10.10. This Agreement takes effect on the date on which you order our services. Acceptance of these terms is an absolute condition of the Client requesting work. An order constitutes acceptance of all our Terms and Conditions.",
            "10.11. You shall not assign this Agreement or any benefits or interests arising under this Agreement without the Agency’s prior written permission.",
          ],
        },
      ],
    },
    {
      heading: "11. Service Level Agreements",
      body: [
        {
          list: [
            "11.1. The hours provided in Service Level Agreements (SLA) can be used in any way, other than for fixed costs and essential services – such as web hosting or advertising placement – or towards payment of debts or existing/quoted jobs.",
            "11.2. Once an account handler at the Agency has been given a job brief as part of the SLA, should the work take longer than 30 minutes, we will endeavour to provide a total estimate of how long the job will take for approval by the Client before any work is commenced.",
            "11.3. For each job requested by the Client as part of the SLA, a minimum of 15 minutes will be deducted from the remaining SLA time allowance.",
            "11.4. All hours worked as part of an SLA are recorded and can be forwarded to the Client on request.",
            "11.5. Once a Client approaches the final two hours of their SLA allowance, the Agency will endeavour to notify them automatically via email, providing the opportunity to purchase another SLA.",
            "11.6. Any hours that have not been used within the initial 12 months after purchase will roll over to the following year, up to a maximum of 24 months. However, although the Agency reserves the right to increase the hourly rate as business needs dictate, the hours in an SLA will be honoured at the original rate at which they were purchased for one year, after which time, any roll-over hours will be applied to subsequent years at the new hourly rate.",
          ],
        },
      ],
    },
    {
      heading: "Print Terms & Conditions — 1. Proofing",
      body: [
        "1.1. After initial design and layout, a mono proof will be submitted for author’s corrections to be identified. These corrections will be carried out inclusive of the quoted price. On approval of a second mono proof, again inclusive of the quoted price, the design will be classed as complete, where a final colour proof will be provided for full Client sign off. Any additional author’s corrections requested after the second mono proof is submitted will be charged at our normal rate of £100 per hour and £5 for each colour A3 proofing page printed.",
      ],
    },
    {
      heading: "2. Print",
      body: [
        {
          list: [
            "2.1. Standing matter and printers’ materials of any kind are effaced or disposed of immediately after the order is executed unless written arrangements are made for retention in advance.",
            "2.2. The Agency shall not be required to work to tolerances closer than those applicable to the materials obtained by him in the ordinary course of trade. No liability shall arise from variation in the standard, quality and performance of such materials.",
            "2.3. Every endeavour will be made to deliver the correct quantity ordered, but estimates are conditional upon margins of 5% for work in one colour and 10% for other work being allowed for overs or shortage (4% and 8% respectively for quantities exceeding 50,000) the same to be charged or deducted.",
          ],
        },
      ],
    },
    {
      heading: "3. Materials Supplied by the Client",
      body: [
        {
          list: [
            "3.1. The Agency will not be responsible for imperfect work caused by defects in or unsuitability of material and equipment supplied by the Client. The Agency will not be responsible for Client’s material wasted in course of production. Extra costs incurred through the use of defective materials or equipment supplied are for the Client’s account.",
            "3.2. The Agency may reject any paper, plates or other materials supplied or specified by the Client which appear to them to be unsuitable. Additional cost incurred if materials are found to be unsuitable during production may be charged except that if the whole or any part of such additional cost could have been avoided but for unreasonable delay by the Agency in ascertaining the unsuitability of the materials then that amount shall not be charged to the Client.",
            "3.3. Quantities of materials supplied by the Client shall be adequate to cover normal spoilage.",
          ],
        },
      ],
    },
    {
      heading: "4. Machine Readable Codes",
      body: [
        {
          list: [
            "4.1. In the case of machine readable codes or symbols, the Agency shall print the same as specified or approved by the Client in accordance with generally accepted standards and procedures.",
            "4.2. The Client shall be responsible for satisfying themselves that the code or symbol will read correctly on the equipment likely to be used by those for whom the code or symbol is intended.",
            "4.3. The Client shall indemnify the Agency against any claims by any party resulting from the code or symbol not reading or not reading correctly for any reason, except to the extent that such claim arises from any failure of the Agency to comply with any of the above which is not attributable to error falling within the tolerances generally accepted in the trade in relation to printing of this sort.",
          ],
        },
      ],
    },
    {
      heading: "5. Delivery",
      body: [
        {
          list: [
            "5.1. Goods will be dispatched or must be collected by the Client when ready and the Client shall not refuse or delay delivery.",
            "5.2. Advice of damage, delay or partial loss of goods in transit or of non-delivery must be given in writing to the Agency and the carrier within three clear days of delivery (or, in the case of non-delivery, within 28 days of despatch of the goods) and any claim in respect thereof must be made in writing to the Agency and the carrier within seven days of delivery (or, in the case of non-delivery, within 42 days of despatch). All other complaints and claims must be made in writing to the Agency within 28 days of delivery. The Agency shall not be liable in respect of any claim unless the aforementioned requirements have been complied with except in any particular case where the Client proves that it was not possible to comply with the requirements and advice (where required) was given and the claim made as soon as reasonably possible.",
            "5.3. Goods completed but not delivered shall thereupon forthwith become due and payable. Moreover after the expiration of 14 days notice the Agency may exercise a general lien on all the Client’s goods and property in our hands and may dispose of such goods and property as they see fit and apply the proceeds towards such debts. The Agency may also elect to cancel further work and/or not produce any unmade balance of such contract and recover from the Client any losses sustained by so doing.",
            "5.4. The Agency shall not be liable for any loss to the Client arising from delay in transit howsoever caused.",
            "5.5. The risk in the goods passes to the Client upon delivery (whether to the Client or to a common carrier) but legal and beneficial ownership shall remain with the Agency until payment in full has been received (each delivery being considered as a whole). Until the date of payment the Client, if so required by the Agency, shall store the goods in such a way that they are clearly identifiable as the property of the Agency.",
          ],
        },
      ],
    },
    {
      heading: "Digital Media Terms & Conditions — 1. Programming",
      body: [
        {
          list: [
            "1.1. The Agency can only program sites to be as secure as reasonably possible at the time of delivery and can not offer indemnity against future threats/developments.",
            "1.2. Once the Agency has deemed a project to be complete, any amendments will be charged at the Agency’s standard billing structure of £100/hour.",
            "1.3. The Agency develops websites for compatibility with the current version of Microsoft Internet Explorer: not all previous versions or every browser. If further compatibility is required, the Agency must be advised at the outset.",
          ],
        },
      ],
    },
    {
      heading: "2. Ownership",
      body: [
        {
          list: [
            "2.1. The ownership of the web pages and copyright therein shall remain with the Agency until payment in full has been received for all sums owing. Once payment has been received, ownership and copyright shall pass to the Client for page text and graphics specific to the Client.",
            "2.2. Ownership of all code used in processing web pages shall remain with the Agency and it is expressly agreed that the use of such code in processing the web pages does not confer any passing of title from the Agency to the Client.",
          ],
        },
      ],
    },
    {
      heading: "3. Content",
      body: [
        {
          list: [
            "3.1. The Client shall supply the copy for your web pages in clear and usable permanent or electronic form and shall be entirely responsible for the content of the web pages.",
            "3.2. All images uploaded to websites by the Client (via CMS, FTP or other) should be optimised (compressed file size). The Agency can provide advice on the best image editing software packages, but accepts no responsibility for the performance or compatibility of third-party software, or the results they produce.",
            "3.3. When a test link is provided, it is the responsibility of the Client to test the functionality, read and check all copy, as well as approve the design and images used before approval is given.",
            "3.4. The Agency can provide legal disclaimers and privacy policies; but it is the responsibility of the Client to confirm with their own legal advisers that these meet their individual requirements, as The Agency accepts no responsibility for their accuracy, relevance or currency.",
          ],
        },
      ],
    },
    {
      heading: "Website Hosting and Email Terms & Conditions — Summary",
      body: [
        "The Agency offers website hosting and database hosting services through the use of third party providers and is subject to requirements set out in these terms and conditions and any other relevant terms and conditions, policies and notices which may be applicable to the supply of hosting services.",
        "Below is a summary of the main points covered in these terms:",
        {
          list: [
            "Whilst we and our suppliers will always endeavour to give you the best possible level of service, we cannot guarantee 100% availability of service.",
            "The Agency and our suppliers accept no responsibility for any losses caused through a loss of service.",
            "Your service will be removed if you fail to pay in time or misuse the service.",
            "The Agency will not be liable for any costs to restore your service once it has been removed. Specifically, any websites with databases will require reprogramming once they have been removed from their original server.",
            "Any work undertaken by the Agency at the request of the Client will be charged at our standard rate of £100 per hour, including investigations regarding problems or loss of service that are not due to the Agency or our suppliers. The Agency should only be contacted after you and your IT professional/advisor have established that any problems are not due to you or your systems.",
          ],
        },
      ],
    },
    {
      heading: "1. Website & Email Content & Use",
      body: [
        "1.1. We make no representation and give no warranty as to the accuracy or quality of information received by any person via the Server and we shall have no liability for any loss or damage to any data stored on the Server. You warrant the accuracy, truthfulness and reliability of any information (including, where applicable, statements of opinion or advice) which you place or allow to be placed on your web pages. You warrant that you are authorised to promote and/or provide any information which you promote and/or provide on your web pages (for example if you are providing financial information, that you hold any necessary authorisation under all relevant legislation including the Financial Services Acts).",
        "1.2. You represent, undertake and warrant to us that you will use the website allocated to you only for lawful purposes. In particular, you represent, warrant and undertake to us that:",
        {
          list: [
            "1.2.1. You will not use the Server in any manner which infringes any law or regulation or which infringes the rights of any third party, nor will you authorise or permit any other person to do so.",
            "1.2.2. You will not host, post, publish, disseminate, link to or transmit: (1.2.2.1) any material or information which is unlawful, infringing, threatening, abusive, malicious, defamatory, obscene, indecent, blasphemous, profane or otherwise objectionable in any way; (1.2.2.2) any material containing a virus or other hostile computer program; (1.2.2.3) any material or information which constitutes, or encourages the commission of a criminal offence, or which threatens, harasses, stalks, abuses, disrupts or violates the legal rights (including rights of privacy and publicity) of others, or which infringes any patent, trade mark, design right, copyright or any other intellectual property right or similar rights of any person which may subsist under the laws of any jurisdiction.",
            "1.2.3. You will not send bulk email, whether opt-in or otherwise, from our network. Nor will you promote a site hosted on our suppliers network using bulk email.",
            "1.2.4. You will not employ programs which consume excessive system resources, including but not limited to processor cycles and memory.",
            "1.2.5. You shall observe the procedures which we may from time to time prescribe and you shall make no use of the Server which is detrimental to other customers.",
            "1.2.6. You shall procure that all mail is sent in accordance with applicable legislation (including data protection legislation) and in a secure manner.",
            "1.2.7. In the case of an individual User, you warrant that you are at least 16 years of age and if the User is a company, you warrant that the Server will not be used by anyone under the age of 16 years.",
            "1.2.8. You are entirely responsible for any civil or criminal liability that is incurred as a result of any use of your web pages. If you post or allow to be posted a defamatory or libellous message, it is you that will be deemed to have published it and you shall be liable for the consequences of it.",
          ],
        },
        "1.3. We and our suppliers reserve the right to remove any material which they deem inappropriate from your web site without notice (specifically, but not restricted to, Warez and illegal MP3 content).",
        "1.4. If you advertise or offer to sell goods or services via your web pages, you undertake to provide goods in conformity with any description and warranties made. You agree to comply with all relevant legislation including Advertising and Broadcast regulations, Consumer Credit Acts and Trades Descriptions Acts. If you are advertising goods in the course of a trade or business this must clearly be so stated.",
      ],
    },
    {
      heading: "2. Charges",
      body: [
        "2.1. All charges payable by you for the Services shall be in accordance with the scale of charges and rates published from time to time by us and shall be due and payable in advance of their service provision without any set-off or other deduction. We reserve the right to change pricing at any time, although all pricing is guaranteed for the current subscription period.",
        "2.2. Payment is due each anniversary month, quarter or year following the date the Services were established until closure notice is given.",
      ],
    },
  ],
};
