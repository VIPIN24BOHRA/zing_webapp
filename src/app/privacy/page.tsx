import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Home = () => (
  <div className="flex flex-col">
    <Header />
    <div className="h-full pt-[64px]">
      <section className="flex h-1/2 place-content-center py-8">
        <div className="z-30 place-content-center px-16 md:px-48">
          <div className="mb-5 w-full text-center text-2xl font-extrabold leading-7 text-black">Zing App Privacy Policy</div>
          <div className="text-left text-base text-gray-800">
            <a id="top"></a>
            As part of our mission to spread good vibes, we want you to be able to share the things that matter to you most with your friends, family and anyone
            else around you. It’s important to us that you feel comfortable and trust us with your data when using the Dial App Services (as detailed under Dial
            App’s Terms of Service). Please take a few minutes to read this Privacy Policy, so that you understand what data we collect, what we do with it and
            why, how we protect it and what are your rights in relation to this data.
            <br />
            <br />
            In general, we collect data that allows us to provide you with an optimal experience while using our Services. This includes, for example, some
            basic benefits like allowing other users to see the name and picture you choose to show and the more advanced ones, like processing your
            registration and financial data to allow you to purchase our paid solutions, if you choose to use them. It also helps us to keep our Services clear
            of fraud and spam, and it allows us to get a unique understanding of what additional services may be useful to you, in addition to other purposes
            outlined in this Privacy Policy.
            <br />
            <br />
          </div>
          <h6 className="mt-8 mb-4 font-bold text-blue-600">Table of Content</h6>
          <ul className="list-inside list-disc font-bold text-blue-600">
            <li>
              <a href="#data-we-collect" className="hover:underline">
                The Data We Collect
              </a>
            </li>
            <li>
              <a href="#how-we-use-data" className="hover:underline">
                How We Use Your Data
              </a>
            </li>
            <li>
              <a href="#what-other-users-see" className="hover:underline">
                What Other Users Can See
              </a>
            </li>
            <li>
              <a href="#data-sharing" className="hover:underline">
                How We Share Your Personal Data
              </a>
            </li>
            <li>
              <a href="#international-data-transfers" className="hover:underline">
                International Data Transfers
              </a>
            </li>
            <li>
              <a href="#data-retention" className="hover:underline">
                Data Retention
              </a>
            </li>
            <li>
              <a href="#your-choices-and-controls" className="hover:underline">
                Your Choices and Controls
              </a>
            </li>
            <li>
              <a href="#your-rights" className="hover:underline">
                Your Rights Related to Your Personal Data
              </a>
            </li>
            <li>
              <a href="#data-security" className="hover:underline">
                Data Security and Storage
              </a>
            </li>
            <li>
              <a href="#third-parties" className="hover:underline">
                Third-Party Websites, Apps and Back-Ups
              </a>
            </li>
            <li>
              <a href="#children-privacy" className="hover:underline">
                Children&#8217;s Privacy
              </a>
            </li>
            <li>
              <a href="#changes" className="hover:underline">
                Changes to this Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="mt-8 text-left text-base text-gray-800">
            <a id="data-we-collect"></a>
            <h6 className="mb-4 font-bold text-blue-600">The Data We Collect</h6>
            The operation and use of our Dial App App and Services involves collection of personal data, where the types of such data depend on the type of
            Service and interaction with us. For example, when you sign up for Dial App, you directly provide us personal data. We also automatically collect
            certain personal data from our users’ device. We explain which information we collect and how we collect it below.
            <br />
            <br />
            The types of personal data collected through use of our Services, including App and website, are listed below. We note that, some types of personal
            data we collect are required for all Dial App Services (for example, your phone number), some types may be required solely for certain Services or
            features you decide to use (for example, Dial App Pay), and some are optional, and subject to your discretion (for example, your photo).
            <br />
            <br />
            We do not read, listen or store your messages and/ or calls made privately:
            <br />
            <br />
            <h6 className="my-4 text-blue-600">
              Data provided or collected through registration & under your Dial App account or participation in Dial App’s activities:
            </h6>
            <ul className="list-inside list-disc">
              <li>
                <strong>Identifiers</strong>, such as:
                <ul className="ml-8 list-inside list-disc">
                  <li>Your mobile number (including mobile country/network code);</li>
                  <li>Your personal details, (e.g., name, date of birth), if you provided them;</li>
                  <li>Your contact details (e.g., email address), if you provided them;</li>

                  <li>Device identifiers, as described below.</li>
                </ul>
              </li>
              <li>
                <strong>Your photo</strong>, if you provided it (including any avatar, etc.).
              </li>
              <li>
                <strong>Your interests</strong>, if you chose to provide them to us.
              </li>
              <li>
                <strong>Your phone address book</strong>, meaning, the names, the phone numbers and the favorites list from your contact lists, if you approved
                access to them.
              </li>
            </ul>
            <h6 className="my-4 text-blue-600">Geolocation data </h6>
            <ul className="list-inside list-disc">
              <li>
                <strong>General location</strong>, we use IP addresses we collect and additional information (e.g., phone number area codes), to estimate your
                general location (e.g., city level).
              </li>
            </ul>
            <h6 className="my-4 text-blue-600">
              Data we collect automatically from your device, e.g., data collected using cookies and other device identifying technologies (Cookies and Tracking
              Technologies):
            </h6>
            <ul className="my-4 list-inside list-disc">
              <li>
                <strong>Device identifiers</strong>, meaning identifiers for devices you have used to access our websites and application, including IP address,
                unique device identifiers, advertising related identifiers, MAC identifiers.
              </li>
              <li>
                <strong>Electronic network activity data</strong>, such as information stored on log files, when you access our Service and website for example,
                including access time and date stamp, pages viewed, IP address, the pages that directed you to our website, information related to errors and
                crash reports.
              </li>
              <li>
                <strong>Activity data</strong>, relating to your usage of Services, such as connection status, whether you have received and seen messages sent
                to you, if you are currently on another call and data related to the calls that you send and receive, such as length of the call, who called
                who, who messaged who, and at what time, your personal preferences related to such usage (for example how often, for how long, what options are
                selected, etc.).
              </li>
              <li>
                <strong>Other device data, </strong>e.g., data about your device’s operating system, your browser, browser or operating system language, your
                wireless network, your mobile carrier.
              </li>
            </ul>
            <h6 className="my-4 text-blue-600">Data we collect or receive from other sources and inferred data:</h6>
            <ul className="my-4 list-inside list-disc">
              <li>
                <strong>Your contact name</strong>, as saved on other users’ devices if they chose to share their contacts with us.
              </li>
              <li>
                <strong>Dial App may also process inferences about your account and device identifier</strong>, such as:
                <ul className="ml-8 list-inside list-disc">
                  <li>Inferred gender &#8211; for example, inferred from your name;</li>
                  <li>
                    Inferred interests &#8211; inferred from the links you visited and your activity in communities and channels – as long as you permitted so;
                  </li>
                  <li>
                    Inferences from third party data and ads-related interactions &#8211; we may receive inferred data, linked to your device identifier
                    (mainly, a unique device identifier generated by cookies or other tracking technologies used on our website and Services) from our trusted
                    third-party advertisers and service providers. Such inferred data we receive may include inferences about your interests and
                    characteristics, generated by such third parties from other websites and services you have visited (for example whether you are interested
                    in fintech, cars etc., which income group you might pertain to, as well as the locations you tend to visit, based on your GPS location). In
                    addition, inferences can be generated from data on how you interact with ads displayed on our App after clicking on them and data about your
                    activity and preferences derived from the clicks on our own ads (and the subsequent installs of our App) associated with your device
                    identifier, delivered on third party&#8217;s advertising platforms by our trusted third parties.
                  </li>
                </ul>
              </li>
            </ul>
            <h6 className="my-4 text-blue-600">Data we collect from your communications with us, including support, customer services and other inquiries:</h6>
            <p>
              If you choose to contact us through any means of communications we make available, you may provide us with certain information such as your
              contact details (e.g., name, email, phone number, mobile carrier, country – mainly where you are not a user of our Services) and other information
              you voluntarily wish to provide (mainly, related to the issue you wish us to address or resolve). We will further store our contact history and
              correspondence with you.
            </p>
            <h6 className="my-4 text-blue-600">Non users&#8217; data:</h6>
            <p>
              Mobile phone number and contact name, as saved on a Dial App user&#8217;s phone address book: we may process your mobile phone number even if you
              are not a Dial App user, in the event that your phone number was included in our existing user’s address book that has been provided to us (and
              subject to such user providing us with approval to access the device address book). We will also save the name it was saved under by our user. We
              do it to show our user who in their contacts is already using our Services and who is not, to allow users find and communicate with their contacts
              who are users or who are not users in a more efficient way, and solely for as long as a relevant Dial App user’s account exists on Dial App. In
              the event you will become an active user, the existing users whose phone book included your number, will be notified that you have joined the
              Service and you will be automatically added to their App&#8217;s contact list.
            </p>
            <h6 className="my-4 text-blue-600">Business partners data:</h6>
            <p>
              When you communicate with us for business purposes as a business partner of ours, we will save your contact data provided by you (names, phone
              number, email, address etc.), as well as any correspondence we have had. We use trusted third-party providers to manage the maintenance and
              storage of such data.
            </p>
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="how-we-use-data"></a>
            </p>
          </div>

          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600">How We Use Your Data</h6>
            At Dial App, we use your personal data to provide you with the best possible Service. This includes administering your account, customizing and
            improving the Service we offer, processing payments, serving ads and marketing campaigns, providing you with support and for compliance and safety
            reasons. We explain below the purposes for which we collect and use your personal data, as well as the types of data we use for each purpose.
            <br />
            <br />
            You can find here information regarding the purposes for which we collect and use your personal data.
            <br />
            <br />
            <h6 className="mb-4 text-blue-600">Authentication and Account Administration:</h6>
            Dial App uses different types of your personal data to create and administrate your Dial App account in order to enable you to register, log in,
            activate and use the Services. This includes, for example:
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>To authenticate and verify your account, as well as to make sure you do not already have a Dial App account;</li>
              <li>
                To synchronize your contact list on the App (meaning, in order to show you your contacts on the Dial App interface so you contact them through
                Dial App);
              </li>
              <li>
                To create your profile, customize your Dial App account according to the information you have provided (i.e., name, photo, etc. including where
                you sign in through your social media account), and display such information as part of your profile when you use Dial App Services.
              </li>
            </ul>
            The types of data we will use for such purpose will mainly include (as detailed in the &#8220;
            <span>
              <strong>
                <a href="#data-we-collect">
                  <span>
                    <b>
                      <span>Data We Collect</span>
                    </b>
                  </span>
                </a>
              </strong>
            </span>
            &#8221; section above):
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>
                Data provided or collected through registration &amp; under your Dial App account, such as Identifiers, your photo and phone address book;
              </li>
              <li>General location;</li>
              <li>Data we collect automatically from your device, such as device identifiers and other device data;</li>
              <li>Data collected from other sources such as social media data and your contact name, as saved on other users&#8217; device.</li>
            </ul>
            <h6 className="mb-4 text-blue-600">
              Provide our Services – Communication & Content Features (messaging, voice and video calls, group chats, communities, channels, bots, chat
              extensions, explore screen, stickers, Dial App lenses, etc.), and enabling backups:
            </h6>
            Dial App uses different types of personal data in order to operate, provide and deliver to you our Services, including communication features. This
            includes, for example:
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>To allow mobile carriers to connect calls to you and from you;</li>
              <li>To show your online status;</li>
              <li>To enable you to send messages, participate in Dial App calls, delete messages, etc.;</li>
              <li>To provide you with other App&#8217;s features such as operational notifications (e.g., missed calls);</li>
              <li>
                We will use your IP address to extract your approximate location, in order to enable you to use certain features that are only available in
                certain countries (for example, sticker packs);
              </li>
              <li>Enable you to upload and create backups of your messages on external services;</li>
              <li>
                Enable you to post and share your User Submitted Content (e.g., images and videos, etc.) on our communities, channels, and bots, where allowed
                by its administrator, and generally utilize our content features;
              </li>
              <li>
                Send you operational related and service-related communications, including administrative messages that relate to your use of the Services;
              </li>
              <li>Subject to the permission you provide, enabling you to share your location with your contacts.</li>
            </ul>
            The types of data we will use for such purpose will mainly include (as detailed in the &#8220;
            <span>
              <strong>
                <a href="#data-we-collect">
                  <span>
                    <b>
                      <span>Data We Collect</span>
                    </b>
                  </span>
                </a>
              </strong>
            </span>
            &#8221; section above):
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>Data provided or collected through registration &amp; under your Dial App account, such as Identifiers, your phone address book;</li>
              <li>Geolocation data;</li>
              <li>
                Data we collect automatically from your device, such as device identifiers, electronic network activity data, activity data and other device
                data;
              </li>
              <li>Data we collect from other sources, such as social media data;</li>
              <li>User Submitted Content.</li>
            </ul>
            As stated above, your messages will not be stored by us once they have been delivered.
            <h6 className="my-4 text-blue-600">Improving and Customizing the Service and Analytics of Dial App Activity:</h6>
            Dial App uses different types of personal data in order to improve, enhance and evaluate the Services, as well as customize the Services. This may
            include, for example:
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>
                We use activity data, and device identifiers to fix and evaluate the technical functionality and availability of the Services, as well as for
                statistical analysis of the usage and functionality, product development, continued improvement of existing features and provision of certain
                features;
              </li>
              <li>
                We use your data provided through registration and inferred data (such as inferred gender, and inferences from ads related interactions),
                interests and general location to customize content we show you, including customized our offers of certain services;
              </li>
              <li>
                When we advertise our Services to you on third party platforms, we might receive indications of which advertisement led you to join our Service
                based on unique device identifiers associated with your device, in order, among others, to assess the performance of our campaigns, to look for
                similar users, for better ad measurements, as well as to learn more about your activity and preferences on our Services.
              </li>
            </ul>
            The types of data we will use for such purpose will mainly include (as detailed in the &#8220;
            <span>
              <strong>
                <a href="#data-we-collect">
                  <span>
                    <b>
                      <span>Data We Collect</span>
                    </b>
                  </span>
                </a>
              </strong>
            </span>
            &#8221; section above):
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>Data provided or collected through registration &amp; under your Dial App account, such as Identifiers and your interests;</li>
              <li>General location;</li>
              <li>
                Data we collect automatically from your device, e.g., data collected using cookies and other device identifying technologies, such as device
                identifiers, electronic network activity data, activity data and other device data;
              </li>
              <li>
                Data we collect from other sources and inferred data, such as social media data, your contact name and inferences about your account and device
                identifiers.
              </li>
            </ul>
            <h6 className="my-4 text-blue-600">Marketing Communications with Dial App’s Users & Location based Offers:</h6>
            Dial App uses different types of personal data in order to contact you with marketing and offers relating to products offered by the Dial App
            Services, and our third party trusted partners, in line with applicable laws. This may include, for example:
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>
                We will use your email address, name and inferred gender or age range, for the purpose contacting you with marketing and offers relating to
                products offered by Dial App, and our third party trusted partners;
              </li>
              <li>Your IP address will be used to extract your general location, for the purposes of presenting offers applicable to your region;</li>
              <li>
                Subject to the permissions you have provided, we will use you GPS location data for the purpose of providing you with location-based marketing
                offers and communications.
              </li>
            </ul>
            Please note that even after you have chosen to unsubscribe (see how you can do it in “
            <span>
              <strong>
                <a href="#your-choices-and-controls">
                  <span>
                    <b>
                      <span>Your Choices</span>
                    </b>
                  </span>
                </a>
              </strong>
            </span>
            ” section), we may send you service-related communications, including administrative messages that relate to your use of the Services.
            <br />
            <br />
            The types of data we will use for such purpose will mainly include (as detailed in the &#8220;
            <span>
              <strong>
                <a href="#data-we-collect">
                  <span>
                    <b>
                      <span>Data We Collect</span>
                    </b>
                  </span>
                </a>
              </strong>
            </span>
            &#8221; section above):
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>Data provided or collected through registration &amp; under your Dial App account, such as Identifiers and your Interests;</li>
              <li>Geolocation data;</li>
              <li>
                Data we collect automatically from your device, such as device identifiers, electronic network activity data, activity data and other device
                data;
              </li>
              <li>Data we collect from other sources and inferred data, such as social media data and inferences about your account and device identifier.</li>
            </ul>
            <h6 className="my-4 text-blue-600">Advertising:</h6>
            Dial App uses different types of personal data in order to provide our advertising services (meaning, to enable the display of advertisements,
            including personalized advertisements provided by third party advertisers, in our App and Services), to measure and optimize the performance of ads
            and deliver more relevant ads. This may include, for example:
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>
                Dial App may share your device identifier (mainly, a unique device identifier generated by cookies or other tracking technologies used on our
                website and Services), as well as age range, inferred gender, and reduced IP address (or GPS location data if you allowed us in your settings)
                with third party advertising partners for the purpose of presenting you with personalized ads;
              </li>
              <li>
                Dial App may collect and use data about links you visit through any of your messages and data about the communities and channels you have
                visited or follow, messages you have liked, messages you have sent and the content you have viewed, for the purpose of personalized advertising.
              </li>
            </ul>
            <br />
            <br />
            The types of data we will use for such purpose will mainly include (as detailed in the &#8220;
            <span>
              <strong>
                <a href="#data-we-collect">
                  <span>
                    <b>
                      <span>Data We Collect</span>
                    </b>
                  </span>
                </a>
              </strong>
            </span>
            &#8221; section above):
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>Data provided or collected through registration &amp; under your Dial App account, such as your interests;</li>
              <li>Geolocation data;</li>
              <li>Data we collect automatically from your device, such as device identifiers, activity data, and other device data;</li>
              <li>Data we collect from other sources and inferred data, such as social media data and inferences about your account and device identifier.</li>
            </ul>
            <h6 className="my-4 text-blue-600">Customer Service:</h6>
            Dial App uses different types of personal data in order to provide customer service and customer support. This may include, for example:
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>We will use your contact details to communicate with you, give you information about your account, and respond to your requests;</li>
              <li>
                We may use your contact history and correspondence with usfor the purpose of improving our Services, training our support team as well as
                internal management operation.
              </li>
            </ul>
            The types of data we will use for such purpose will mainly include (as detailed in the &#8220;
            <span>
              <strong>
                <a href="#data-we-collect">
                  <span>
                    <b>
                      <span>Data We Collect</span>
                    </b>
                  </span>
                </a>
              </strong>
            </span>
            &#8221; section above):
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>Data provided or collected through registration &amp; under your Dial App account, such as Identifiers and your phone address book;</li>
              <li>Geolocation data;</li>
              <li>
                Financial information provided or collected through your use of our limited financial services (e.g., payment solutions), or purchased
                subscription and offer;
              </li>
              <li>
                Data we collect automatically from your device, such as device identifiers, electronic network activity data, activity data and other device
                data;
              </li>
              <li>Data we collect from other sources and inferred data, such as social media data;</li>
              <li>Data we collect from your communications with us, including support, customer services and other inquiries.</li>
            </ul>
            <h6 className="my-4 text-blue-600">Safety, Security & Fraud Prevention:</h6>
            Dial App uses different types of personal data for security purposes such as fraud and spam prevention. This may include, for example:
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>
                We will collect and examine URLs included in messages or messages, which were reported by other users, or were otherwise suspected to be
                unsolicited and using your device operating system authentication services;
              </li>
              <li>
                We may use automated decisions to close an account based on such data and other logic we have created for this, in order to protect other users
                and prevent recurring breaches. If your account has been blocked, you can contact our support.
              </li>
            </ul>
            The types of data we will use for such purpose will mainly include (as detailed in the &#8220;
            <span>
              <strong>
                <a href="#data-we-collect">
                  <span>
                    <b>
                      <span>Data We Collect</span>
                    </b>
                  </span>
                </a>
              </strong>
            </span>
            &#8221; section above):
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>Data provided or collected through registration &amp; under your Dial App account, such as Identifiers;</li>
              <li>Geolocation data;</li>
              <li>
                Financial information provided or collected through your use of our limited financial services (e.g., payment solutions), or purchased
                subscription and offers;
              </li>
              <li>
                Data we collect automatically from your device, such as device identifiers, electronic network activity data, activity data and other device
                data<strong>.</strong>
              </li>
            </ul>
            <h6 className="my-4 text-blue-600">B2B Communications and Engagements: Provide Service to Existing Users:</h6>
            We will use Business Partners Data (as detailed in the{' '}
            <b>
              <a href="#data-we-collect">“Data We Collect” </a>{' '}
            </b>
            section above) for the purpose of communicating with you, or as otherwise needed to facilitate our engagement, as well as to send you our marketing
            offers. You have the ability to opt out of our direct marketing emails at any time (see how you can do it in{' '}
            <b>
              <a href="#your-choices-and-controls">“Your Choices”</a>
            </b>{' '}
            section).
            <h6 className="my-4 text-blue-600">Provide Service to Existing Users:</h6>
            We will store and use Non-User Data (as detailed in the{' '}
            <b>
              <a href="#data-we-collect">“Data We Collect”</a>{' '}
            </b>
            section above) which includes non-Dial App users’ phone number (and names under which they were saved by Dial App users) in the event such contact
            was included in our user’s address book that has been provided to us, and for the purpose of showing our user who in their contacts is already using
            our Services and who is not, to allow the user find and communicate with their contacts who are users in a more efficient way. If you are not a Dial
            App user and would like to be excluded from such processing, please contact us at <b>plugapp2022@gmail.com</b>
            <h6 className="my-4 text-blue-600">Defend our Rights, Enforce our Policies & Compliance with Legal Obligations and Public Interests:</h6>
            Dial App may use and share different types of personal data, and depending on the circumstances, for the purpose of defending our rights and
            enforcing our polices, terms and agreements, where it is necessary to comply with legal obligations to which we are subject to and cooperation with
            regulators and law enforcement bodies (where there is a valid legal request such as binding order), as well as in very limited and rare
            circumstances, where we find it necessary and essential for the purpose of protecting your or third party’s life safety and security as well as
            humanitarian purposes. This may include, for example:
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>In the event of a dispute, claims and legal proceedings, and solely to the extent necessary for such purpose;</li>
              <li>We may record and log some of your actions, such as acceptance of our terms and polices, acceptance of certain offers, etc.;</li>
              <li>
                We will store an indication of your request to exercise your rights related to your personal data in order to be able to demonstrate compliance;
              </li>
              <li>We may store telecommunication data in accordance with local laws;</li>
              <li>
                We may be required to provide authorities with information in compliance with criminal investigations laws applicable to electronic
                communications provider or otherwise applicable to us.
              </li>
            </ul>
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="what-other-users-see"></a>
            </p>
          </div>
          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600">What Other Users Can See</h6>
            When you use our Services, other Dial App users can see certain data about you, for example, the fact that you are a Dial App user or a user of
            certain Dial App Services, the content you voluntarily share, your profile information (subject to your settings), your connection status, etc., as
            we detail and explain below.
            <br />
            <br />
            Other users can see on Dial App the following data about you:
            <ul className="my-4 ml-4 list-inside list-disc">
              <li>
                Unless you have changed your settings:
                <ul className="my-4 ml-8 list-inside list-disc">
                  <li>your user name and photo;</li>
                  <li>your phone number (if you are in communication with them);</li>
                  <li>your connection status;</li>
                  <li>whether you have received and seen messages sent to you;</li>
                </ul>
              </li>
              <li>If you are currently on another call.</li>
              <li>
                If they are part of the call with you, data related to the calls and messages you have sent and received such as length of the call, who called
                who, who messaged who, and at what time, the type of call (audio/video) and whether you answered the call on your primary or another device.
              </li>
              <li>
                For disappearing messages, we will notify the other users of any screenshots you’ve taken (so please respect the vibe and do not take them).
              </li>
              <li>
                When you join Dial App, the contacts in your address book that are already Dial App members may be informed that you’re now on Dial App too.
              </li>
              <li>A reminder about your birthday on the date of your birthday.</li>
              <li>
                When you join Dial App Pay, the contacts in your address book that are already Dial App members may be informed that you’re now using Dial App
                Pay. In addition, Dial App users will see an indication whether you are a Dial App Pay user.
              </li>
              <li>
                If your “Use Peer-to-Peer” option is on, other users can use technical tools to see your IP address. You can turn this option off at any time on
                your privacy settings.
              </li>
              <li>
                <strong>Your public posts: </strong>if you post information on our public spaces such as communities or channels, it may be searchable and
                available to anyone on Dial App. You can always delete your posts on those public spaces, but Dial App cannot control and is not responsible for
                what other users do with this information (e.g., store on their devices, publish on Dial App or outside of it etc.), thus, we recommend you do
                not disclose your personal data through the content of your posts.
              </li>
            </ul>
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="data-sharing"></a>
            </p>
          </div>

          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600">How We Share Your Personal Data</h6>
            We share data with third parties, including our corporate family and with trusted companies that help us provide our Services in compliance with
            strict data security and privacy practices, as well as other third parties such as our advertising partners, and third parties offering services
            through our App. We may also share personal data in limited circumstances where we are required to do so under applicable law. You can find here
            information about the categories of such third-party recipients, as well as the purpose for which the personal data is shared with such third
            parties.
            <br />
            <br />
            Your data is kept safe with us, but we do share your personal data with third parties we trust, solely as follows:
            <br />
            <br />
            <h6 className="my-4 text-blue-600">The Dial App Corporate Family:</h6>
            We may share the data we collect about you with the Dial App corporate family, including our parent company, Rakuten Group Inc., and its and our
            affiliates and our subsidiaries, for the following purposes:
            <ul className="ml-8 list-inside list-disc">
              <li>
                Certain types of data, such as name, personal email, avatar, phone numbers, Dial App unique ID, may be disclosed in order to provide joint
                content and our Services (e.g., registration, coordination of membership accounts between the Dial App corporate family, transactions, analytics
                and customer support);
              </li>
              <li>
                Additionally, we may share certain types of data about you as may be necessary to help detect and prevent potentially illegal acts, violations
                of Dial App policies, fraud and/or data security breaches;
              </li>
              <li>
                We share data with Dial App&#8217;s subsidiaries due to our global operations, as we have teams and offices located worldwide, and each such
                subsidiary may operate the services or other functions (such as development, etc.) for a certain region;
              </li>
              <li>
                Further, we share data with our affiliated company, Rakuten Marketing LLC, as our service provider for our marketing and advertising activities.
              </li>
            </ul>
            For users registering to Dial App from November 20, 2019 – details provided during your registration will be shared with Rakuten group to create the
            Rakuten account and/or to link your Rakuten account with your Dial App account. In addition, the same will apply to users in Japan, who decided to
            link their email to their Dial App account.
            <h6 className="my-4 text-blue-600">Our Service Providers:</h6>
            We share your personal data with our trusted service providers and business partners that perform business operations for us on our behalf (as data
            processors) and pursuant to our instructions. This includes the following types of service providers:
            <ul className="my-4 ml-8 list-inside list-disc">
              <li>
                <strong>Advertising and marketing service providers,</strong> who help us with advertising measurements and app installations;
              </li>
              <li>
                <strong>Data storage providers, </strong>with whom we entrust the hosting and storage of our data;
              </li>
              <li>
                <strong>Customer support providers</strong>, who help us perform such functions as customer support and customer service;
              </li>
              <li>
                <strong>Data analytics and data management providers</strong>, who help us analyze, improve, personalize and enhance our Services;
              </li>
              <li>
                <strong>Measurement partners</strong>, who help us with measurements, tracking and targeting;
              </li>

              <li>
                <strong>Data security partners</strong>, who help us detect and prevent potentially illegal acts, violations of our policies, fraud and/or data
                security breaches and ensure compliance with legal obligations.
              </li>
            </ul>
            Where we share information with services providers and partners, we ensure they only have access to such information that is strictly necessary in
            order for us to provide the Services. These parties are required to secure the data they receive and to use the data for pre-agreed purposes only,
            while ensuring compliance with all applicable data protection regulations (such service providers may use other non-personal data for their own
            benefit).
            <h6 className="my-4 text-blue-600">Advertising Partners:</h6>
            To enable the limited advertisements on our Services, we may share device identifiers (i.e., an advertising identifier associated with your device)
            with our third-party advertising partners, along with certain of your device data (e.g. language preference), age range, inferred gender, country,
            city, reduced IP address (or GPS location data if you allowed us in your settings) and certain technical or aggregated data about you and the device
            you are using. This includes partners managing our advertising placements (Rakuten included) and also advertisers themselves and their agencies or
            third parties managing their advertising demands. Your unique advertising identifier is created by your mobile device’s operating system and you can
            change it or choose not to share it at any time.
            <h6 className="my-4 text-blue-600">Legal and Law Enforcement:</h6>
            Subject to our strict data security and privacy practices and without compromising our end-to-end encryption, we may disclose certain types of your
            data, including, and depending on the circumstances, Activity Data, Identifiers and your phone address book, to law enforcement, governmental
            agencies, or authorized third parties, in response to a verified request relating to terror acts, criminal investigations or alleged illegal
            activity or any other activity that may expose us, you, or any other Dial App user to legal liability, and solely to the extent needed to comply
            with such purpose.
            <h6 className="my-4 text-blue-600">Corporate Transactions:</h6>
            In the event of a corporate transaction (e.g., sale of a substantial part of our business, merger, consolidation or asset sale) we will share the
            data we store with our acquiring company. We will obligate the acquiring company to assume the rights and obligations as described in this Privacy
            Policy (including this notice), and we will notify you of such corporate changes in your data processing.
            <h6 className="my-4 text-blue-600">Limited Payment Services:</h6>
            If you use our Dial App Pay services, we will share with our third-party payment processor KYC related data such as your name, date of birth,
            contact details, country, etc.
            <br />
            <br />
            If you use our Dial App Chatbot Payment, we will share with Google Pay or Apple Pay or any other linked payments provider the following information:
            (i) name of the payment service provider merchant; (ii) price of the items purchased and currency; and (iii) the description of the items purchased.
            The confirmation of the payment is provided directly to the merchant and Dial App does not receive or share any payment data or registration data
            from Apple Pay nor Google Pay. Note that, your use of Apple Pay and Google Pay, including their use of your data, is subject to their respective
            terms and privacy policy.
            <br />
            <br />
            If you use our Dial App Out Credit and subscriptions, we will share your email address with our payment processor, for the purpose of verification
            and fraud detection.
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="international-data-transfers"></a>
            </p>
          </div>

          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600">International Data Transfers</h6>
            Due to our global operations, your personal data will be shared with Dial App corporate family, as well as our service providers and business
            partners around the world. We take measures to ensure the transfer of such data will provide sufficient safeguards. These measures include
            compliance with Binding Corporate Rules of the Rakuten Group, as well as contractual commitments of our partners and service providers. We further
            explain below why we transfer personal data, the measures we take to ensure your personal data will be secure upon transfer, and your rights in this
            regard.
            <br /> <br />
            Due to our global nature, your personal data may need to be processed in countries where data protection and privacy regulations may not offer the
            same level of protection as in your home country. Depending on the territory from which you use our Services, we may store and process all
            categories of your personal data on our computers located globally, including in the United States, Asia, Europe, Russia, Australia and Brazil. In
            addition, our communications servers are located globally in order to enable the operation of our communications servicesand we use service
            providers that may be located in various locations.
            <br /> <br />
            Transfers of your personal data will be made in accordance with applicable data protection laws, and among others, we have put in place appropriate
            safeguards (such as contractual commitments) in accordance with applicable legal requirements to ensure that your personal data is adequately
            protected.
            <br /> <br />
            Furthermore, as part of the Rakuten Group, Dial App relies on the Rakuten Group Binding Corporate Rules to legitimize international data transfers
            within the Group. The Rakuten Group Binding Corporate Rules.
            <br /> <br />
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="data-retention"></a>
            </p>
          </div>
          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600">Data Retention</h6>
            As we have explained above, we process personal data for various purposes. Accordingly, we only keep personal data as long as required to fulfill
            the purpose for which the data was collected, or, in some instance, where we have other necessities to retain the personal data, for example, where
            required by law. We explain below the criteria used by us to determine the retention of your personal data (meaning, for how long we store it and
            when we delete it, aligned with the type of data and purpose of collection).
            <br />
            <br />
            The criteria used by us to determine Dial App’s retention periods are as follows:
            <ul className="my-4 ml-8 list-inside list-disc">
              <li>
                The type of personal data and purpose of collection &#8211; unless otherwise specified, we retain data as long as it is necessary and relevant
                for us to achieve the purposes for which the personal data was collected. For example:
              </li>
              <li>
                Personal data required to be retained in order to maintain your Dial App account and to enable you the use of Dial App Services – these types of
                data, including your mobile number, and phone address book, will be retained for as long as you maintain your Dial App account.
              </li>
              <li>
                Personal data you have voluntarily provided during registration or through your account &#8211; these types of data, including your photo, date
                of birth, email address and interests, will be retained for as long as you maintain your Dial App account.
              </li>
              <li>The details of your communication with our customer support team will be stored for 10 years.</li>
              <li>
                Call Detail Records (CDRs) of your calls and messaging activity are kept as a raw data for 24 months from creation. CDRs may include, for
                example, your phone number and device identifiers (i.e., IP address, unique device identifier).
              </li>
              <li>We delete any message once delivered, or after 14 days if delivery attempts throughout this period was not successful.</li>
            </ul>
            If you decide to delete your Dial App account, the CDRs and communications with our customer support will be retained as detailed above, and we will
            further retain records of purchases you have made (using Dial App Pay, purchasing subscriptions, etc.), for the periods required under applicable
            laws, or as needed in accordance with our fraud monitoring program.
            <br />
            <br />
            All other types of data related to your Dial App account will be deleted, unless we are required to further retain the data, subject to the criteria
            detailed below. We may keep activity data on a non-identifiable basis to improve our Services. Your posts on channels and communities may remain
            available if you do not delete them. Please note that deletion of the App (i.e., uninstall the App from your device) will not delete your account.
            <ul className="my-4 ml-8 list-inside list-disc">
              <li>
                <strong>Compliance with our legal obligations – </strong>we are required to retain certain types of data in order to comply with our obligations
                under applicable laws. For example, we need to retain transactions information to comply with tax legislation. In addition, we may retain
                certain types of personal data in the event we are required to do so subject to a binding legal request or a court order. Further, subject to EU
                Directive 2002/58/EC we are required to retain certain personal data (such as phone number) to convey messages and calls.
              </li>
              <li>
                <strong>Dispute, claims and legal proceedings</strong> &#8211; if you have a dispute with us, we may retain certain types of personal data as
                necessary and applicable to your claims, including any legal proceedings between us, until such dispute was resolved, and following, if we find
                it necessary, in accordance with applicable statutory limitation periods. In addition<strong>, </strong>in the event you request to exercise
                your rights, we will maintain the applicable correspondence for as long as needed to demonstrate compliance, and usually in accordance with
                applicable statutory limitation periods.
              </li>
              <li>
                <strong>Retention for Non users&#8217; data – </strong>If you are not a Dial App user, and we process your data to enable Dial App users to
                communicate with you via Dial App Services we will retain such data as long as it is relevant to Dial App users, or until you have requested us
                to stop processing your phone number. You can request to exclude your phone number (by contacting us at: <b>plugapp2022@gmail.com</b>
                ). Furthermore, if one of our users used our Dial App Out Services in order to communicate with you (i.e., call you through Dial App), we will
                retain a log of such call (Call Detail Records – CDR – as detailed above), which will include your phone number, for 24 months from creation.
              </li>
            </ul>
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="your-choices-and-controls"></a>
            </p>
          </div>
          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600">Your Choices & Controls</h6>
            The personal data is yours – the choice is yours too on how to customize your Dial App experience. Dial App users enjoy certain choices and controls
            related to their personal data. We explain below the controls and choices provided by Dial App and how you may exercise them, including deletion of
            messages, privacy settings, the visibility of your online status, limit what other users can see, unsubscribe from marketing materials and opt-out
            of certain personalization features.
            <br />
            <br />
            Dial App provides you with certain choice and controls you may exercise, related to your personal data, as follows:
            <ul className="my-4 ml-8 list-inside list-disc">
              <li>
                We enable you to delete or edit your messages anytime, even after they have been sent (they will be deleted or appear edited for you, your
                friend and our Services).
              </li>
              <li>You can also control your privacy settings within the App to change the visibility of your online status.</li>
              <li>You can disable the “seen” notification so that other users do not know whether you’ve read a message yet.</li>
              <li>
                You can choose not to share your photo and/or birthday or not to allow other users to look you up by name, which are available within the App.
              </li>
              <li>
                You can also make additional choices on your phone’s settings by changing our App’s permissions such as GPS location sharing, access to contact
                list and more.
              </li>
              <li>
                If you do not wish to receive Dial App marketing notifications, you may adjust your system settings to decline notifications from Dial App, or
                submit a request to our support. And if you subscribed to receive promotional emails from Dial App, you can unsubscribe in any such email at any
                time.
              </li>
              <li>
                Sending a message to a bot, subscribing to a bot will allow admins of that bot to send you notifications and personal messages. If you do not
                wish to receive such notifications, you may adjust your account settings to decline them or opt-out at any time from receiving further
                notifications. You may also adjust your phone preferences to disable the use of your GPS location data at any time.
              </li>
              <li>
                You can choose to allow or to not allow customization and personalization of our Services provided to you based on your personal data, by
                changing your personal data toggles in the privacy setting within the App.
              </li>
            </ul>
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="your-rights"></a>
            </p>
          </div>
          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600"> Your Rights Related to Your Personal Data</h6>
            Subject to local law, you may have certain rights regarding the personal data that Dial App has collected about you. Such rights may include
            (depending on your jurisdiction as well as the type of data and the purpose for which the data was collected or retained) the right to know which
            types of data we collect and why we collect it (as we detail under this notice), the right to request rectification of your personal data, the right
            to request us to delete your personal data, the right to opt-out of certain data collection, the right to access your personal data, the right to
            withdraw your consent, as well as the right to lodge a complaint to a supervisory authority. We further explain below the operational meaning of
            each such right, as well as when and how you may exercise your right.
            <br />
            <br />
            Dial App respects your ability to exercise certain rights with regards to your personal data collected and stored. In some areas and jurisdictions,
            such principal rights may include all or some of the following rights:
            <ul className="my-4 ml-8 list-inside list-disc">
              <li>
                <strong>The right to be provided with information</strong> <strong>about our data collection and privacy practices</strong> &#8211; including
                the sources from which we collect data, the purposes for which we collect and share data, the data we hold. This Privacy Policy describes our
                practices in detail using simple language. Everything you need to know is here. If you have more questions, feel free to contact us at:{' '}
                <b>plugapp2022@gmail.com</b>
              </li>
              <li>
                <strong>The right to access your personal data &#8211; </strong>you may exercise your access right by using the{' '}
                <strong>request your data button </strong>in Dial App’s privacy settings on your mobile device. If you have further questions contact us at{' '}
                <b>plugapp2022@gmail.com</b>.
              </li>
              <li>
                <strong>The right to request rectification the personal data we hold about you</strong> &#8211; if you believe we have the wrong data about you,
                or that your data is incomplete, feel free to change your personal data at any time through the profile settings on your Dial App settings on
                your mobile device. If you can’t find what you are looking for, contact us at:
                <b>plugapp2022@gmail.com</b>.
              </li>
              <li>
                <strong>The right to erase your personal data</strong> &#8211; we have made it easy for you to delete your historical data on the App, while
                continuing to use the App. Simply tap on the <strong>delete your data </strong>button in your privacy settings. We will delete the data which we
                are not otherwise required to keep or is necessary for the provision of the Service. And no need to worry – deleting your data won’t remove the
                chats on your Dial App App on your phone. Note that when you deactivate the Dial App account your data and chats are automatically deleted from
                your devices.
              </li>

              <li>
                <strong>The right to object to our use of your personal data</strong> &#8211; you can object to the processing of certain forms of data by
                contacting our support. Complete this by contacting us on:
                <b>plugapp2022@gmail.com</b>
                and explain your special circumstances. If you receive emails from us, you can always opt out on the bottom of the email, or by contacting our
                support.
              </li>

              <li>
                <strong>The right to withdraw consent &#8211;</strong> where we have collected or other process your personal data based on your consent and
                permissions, at any time, you have the right withdraw your consent.
              </li>
              <li>
                <strong>The right to lodge a complaint with your local data protection authority.</strong>
              </li>
            </ul>
            <br />
            <br />
            We provide you with the ability to independently exercise certain choices and controls in connection with your personal data – please see details
            under the &#8220;
            <span>
              <strong>
                <a href="#your-choices-and-controls">Your Choices</a>
              </strong>
            </span>
            &#8221; paragraph above. If you wish to further exercise your rights, please contact us as specified under &#8220;
            <span>
              <strong>
                <a href="#contact-us">Contact Us</a>
              </strong>
            </span>
            &#8221; section below. We will contact you if we need additional information from you in order to honor your requests.
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="data-security"></a>
            </p>
          </div>
          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600"> Data Security and Storage</h6> At Dial App, we take information security seriously and have strict
            security measures in place to ensure that your account and your personal data are safe. Here you can find information regarding the security
            measures we have in place.
            <br />
            <br />
            We implement technical and organizational measures to ensure a level of security appropriate to the risk to the personal data we process. These
            measures are aimed at ensuring the ongoing integrity and confidentiality of personal data.
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="third-parties"></a>
            </p>
          </div>
          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600">Third-Party Websites, Apps and Back-Ups</h6>
            Our App may contain links to other third-party websites or you may access Apps from a third-party website. We are not responsible for the data
            collection by such third parties, and their privacy practices and polices shall govern your personal data processed by them.
            <br />
            <br />
            <h6 className="my-4 text-blue-600">Third parties’ websites and apps:</h6>
            If you access or Services and App from any third-party website or other digital source, or access any third-party site from our Services and App,
            note that, your use and the personal data collected will be subject to such third party’s practices and we do not monitor, nor responsible for the
            privacy practices of these third parties.
            <h6 className="my-4 text-blue-600">Back-ups:</h6>
            If you voluntarily choose to back up your Dial App conversations, such back-ups are made by independent third parties and kept on your device’s
            service according to operating system’s (Google/ iOS) terms and policies and are no longer protected by Dial App’s end-to-end encryption nor Dial
            App has any control over it. This is also true for using Dial App Desktop – where your conversations are kept on your personal computer under your
            security definitions.
            <h6 className="my-4 text-blue-600">TrueDepth APIs:</h6>
            Starting the end of June 2021 we added a new face lens feature that uses camera capabilities in order to add graphic elements on the user’s face.
            Some lenses can make use of TrueDepth API. TrueDepth API is only active when those lenses are running. It is a very specific feature and none of the
            Dial App lenses will be using it at the moment. Types of lenses that might use it are virtual try-on, which we don’t have. Dial App does not collect
            any data from these sensors or ever store it anywhere. The data never leaves the user’s device (so cannot be, and is not, shared by Dial App with
            third parties) and is only used for lens operation.
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="children-privacy"></a>
            </p>
          </div>

          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600"> Children’s Privacy</h6>
            Our Services are not intended for children under the age of 13 and we do not knowingly collect personal data from individuals under this age.
            <br />
            <br />
            Our Services are not intended for children under the age of 13. Therefore, we do not knowingly collect personal data via our websites, applications,
            services, or tools from anyone under 13.
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="changes"></a>
            </p>
          </div>
          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600">Changes to this Privacy Policy</h6>
            We may make changes to this Privacy Policy from time to time. If we do (except for minor tweaks), we will notify you via our App and website.
            <br />
            <br />
            We may modify or update this privacy notice from time to time.
            <br />
            <br />
            If we change this privacy policy (except for technical tweaks), we will notify you of the changes. Where changes to this Privacy Policy will have a
            fundamental impact on the nature of the collection or use of your personal data, or otherwise have a substantial impact on you, we will give you
            sufficient advance notice so that you have the opportunity to exercise your rights. The last modification date of this privacy policy will be
            reflected in the “Last Updated” header above.
            <p className="my-4 text-blue-600">
              <a href="#top">Back to top</a>

              <br />
              <a id="contact-us"></a>
            </p>
          </div>

          <div className="mt-8 text-left text-base text-gray-800">
            <h6 className="mb-4 font-bold text-blue-600">Contact us</h6>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at plugapp2022@gmail.com.
            <ul>
              <li>
                <strong>By mail:</strong>
                plugapp2022@gmail.com.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
)

export default Home
