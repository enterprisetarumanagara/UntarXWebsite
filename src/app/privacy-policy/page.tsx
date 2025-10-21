'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Trash2, Send, CheckCircle } from 'lucide-react';

export default function PrivacyPolicyPage() {

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3 cursor-pointer">
              <img
                src="/untarxlogo.svg"
                alt="UntarX Logo"
                width={40}
                height={40}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UntarX
              </span>
            </Link>
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>
          <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-blue-700 font-medium">Last updated: July 25, 2025</span>
            </div>
          </div>
        </div>
      </div>

    {/* Content Section */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Data Deletion Request Section */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 px-8 py-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Trash2 className="w-5 h-5 text-red-600" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Request Data Deletion</h2>
                <p className="text-gray-600 mt-1">
                Request to delete your personal data from our systems by emailing us at{' '}
                <a href="mailto:enterprise@untarx.com" className="text-red-600 underline hover:text-red-800">
                    enterprise@untarx.com
                </a>
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Privacy Matters</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">
          {/* Definitions Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Interpretation and Definitions</h2>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Interpretation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Definitions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">For the purposes of this Privacy Policy:</p>
              
              <div className="grid gap-4">
                {[
                  { term: "Account", definition: "means a unique account created for You to access our Service or parts of our Service." },
                  { term: "Affiliate", definition: "means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority." },
                  { term: "Application", definition: "refers to Untar X, the software program provided by the Company." },
                  { term: "Company", definition: "(referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to Tarumangara Enterprise, Jl. Letjen S. Parman No. 1." },
                  { term: "Country", definition: "refers to: Indonesia" },
                  { term: "Device", definition: "means any device that can access the Service such as a computer, a cellphone or a digital tablet." },
                  { term: "Personal Data", definition: "is any information that relates to an identified or identifiable individual." },
                  { term: "Service", definition: "refers to the Application." },
                  { term: "Service Provider", definition: "means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used." },
                  { term: "Usage Data", definition: "refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)." },
                  { term: "You", definition: "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable." }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <span className="font-semibold text-gray-900">{item.term}:</span>
                    <span className="text-gray-600 ml-2">{item.definition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data Collection Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Collecting and Using Your Personal Data</h2>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Types of Data Collected
              </h3>

              {/* Personal Data Subsection */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 pl-5 border-l-2 border-green-400">Personal Data</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["Email address", "First name and last name", "Phone number", "Usage Data"].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-green-50 rounded-lg p-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage Data Subsection */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 pl-5 border-l-2 border-blue-400">Usage Data</h4>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>Usage Data is collected automatically when using the Service.</p>
                  <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                  <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                  <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                </div>
              </div>

              {/* App-specific Data */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 pl-5 border-l-2 border-purple-400">Information Collected while Using the Application</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:
                </p>
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Information regarding your location</span>
                  </div>
                </div>
                <div className="mt-4 space-y-3 text-gray-600 leading-relaxed">
                  <p>We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.</p>
                  <p>You can enable or disable access to this information at any time, through Your Device settings.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Usage Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 px-8 py-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Use of Your Personal Data</h3>
            </div>
            <div className="p-8">
              <p className="text-gray-600 leading-relaxed mb-6">The Company may use Personal Data for the following purposes:</p>
              <div className="space-y-4">
                {[
                  { title: "To provide and maintain our Service", description: "including to monitor the usage of our Service." },
                  { title: "To manage Your Account", description: "to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user." },
                  { title: "For the performance of a contract", description: "the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service." },
                  { title: "To contact You", description: "To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation." },
                  { title: "To provide You", description: "with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information." },
                  { title: "To manage Your requests", description: "To attend and manage Your requests to Us." },
                  { title: "For business transfers", description: "We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred." },
                  { title: "For other purposes", description: "We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience." }
                ].map((item, index) => (
                  <div key={index} className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                    <h5 className="font-semibold text-gray-900 mb-2">{item.title}:</h5>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">We may share Your personal information in the following situations:</h4>
                <div className="space-y-4">
                  {[
                    { title: "With Service Providers", description: "We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You." },
                    { title: "For business transfers", description: "We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company." },
                    { title: "With Affiliates", description: "We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us." },
                    { title: "With business partners", description: "We may share Your information with Our business partners to offer You certain products, services or promotions." },
                    { title: "With other users", description: "when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside." },
                    { title: "With Your consent", description: "We may disclose Your personal information for any other purpose with Your consent." }
                  ].map((item, index) => (
                    <div key={index} className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                      <h5 className="font-semibold text-gray-900 mb-2">{item.title}:</h5>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Management Sections */}
          {[
            {
              title: "Retention of Your Personal Data",
              color: "indigo",
              content: [
                "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.",
                "The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods."
              ]
            },
            {
              title: "Transfer of Your Personal Data",
              color: "teal",
              content: [
                "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.",
                "Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.",
                "The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information."
              ]
            },
            {
              title: "Delete Your Personal Data",
              color: "pink",
              content: [
                "You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.",
                "Our Service may give You the ability to delete certain information about You from within the Service.",
                "You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.",
                "Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so."
              ]
            }
          ].map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className={`bg-gradient-to-r from-${section.color}-50 to-${section.color}-100 px-8 py-6 border-b border-gray-100`}>
                <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Disclosure Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 px-8 py-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Disclosure of Your Personal Data</h3>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 pl-5 border-l-2 border-yellow-400">Business Transactions</h4>
                  <p className="text-gray-600 leading-relaxed">If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 pl-5 border-l-2 border-orange-400">Law enforcement</h4>
                  <p className="text-gray-600 leading-relaxed">Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibical text-gray-900 mb-3 pl-5 border-l-2 border-red-400">Other legal requirements</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                  <div className="grid gap-3">
                    {[
                      "Comply with a legal obligation",
                      "Protect and defend the rights or property of the Company",
                      "Prevent or investigate possible wrongdoing in connection with the Service",
                      "Protect the personal safety of Users of the Service or the public",
                      "Protect against legal liability"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-red-50 rounded-lg p-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-8 py-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Security of Your Personal Data</h3>
            </div>
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed">
                    The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Children's Privacy</h2>
            </div>
            <div className="p-8">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
              </div>
            </div>
          </div>

          {/* Links to Other Websites */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Links to Other Websites</h2>
            </div>
            <div className="p-8">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
              </div>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Changes to this Privacy Policy</h2>
            </div>
            <div className="p-8">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, You can contact us:
                  </p>
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-gray-900">By email:</span>
                      <a href="mailto:enterprise@tarumanagarafoundation.org" className="text-indigo-600 hover:text-indigo-800 font-medium">
                        enterprise@tarumanagarafoundation.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
    
      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; {new Date().getFullYear()} UntarX Development Team
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
    }
