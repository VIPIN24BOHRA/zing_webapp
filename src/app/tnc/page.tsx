import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Home = () => (
  <div className="flex flex-col">
    <Header />
    <div className="h-full pt-[64px]">
      <section className="flex h-1/2 place-content-center py-8">
        <div className="z-30 place-content-center px-16 md:px-48">
          <div className="mb-5 w-full text-center text-2xl font-extrabold leading-7 text-black">Terms & Conditions for Dial App</div>

          <div className="mt-5 text-left text-base text-gray-800">
            By downloading or using the app, these terms will automatically apply to you - you should make sure therefore that you read them carefully before
            using the app. You&apos;re not allowed to copy or modify the app, any part of the app, or our trademarks in any way. You&apos;re not allowed to
            attempt to extract the source code of the app, and you also shouldn&apos;t try to translate the app into other languages or make derivative
            versions. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to
            ABMR Holdings Pte Ltd.
          </div>
          <div className="mt-5 text-left text-base text-gray-800">
            ABMR Holdings Pte Ltd is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make
            changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without
            making it very clear to you exactly what you&apos;re paying for.
          </div>
          <div className="mt-5 text-left text-base text-gray-800">
            The Dial App app stores and processes personal data that you have provided to us, to provide our Service. It&apos;s your responsibility to keep your
            phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software
            restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to
            malware/viruses/malicious programs, compromise your phone&apos;s security features and it could mean that the Dial App app won&apos;t work properly
            or at all.
          </div>
          <div className="mt-5 text-left text-base text-gray-800">The app does use third-party services that declare their Terms and Conditions.</div>
          <div className="mt-5 text-left text-base text-gray-800">
            {' '}
            Link to Terms and Conditions of third-party service providers used by the app
            <ul className="ml-10 list-disc">
              <li>
                <a className="text-blue-600 visited:text-purple-600" href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">
                  Google Play Services
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 visited:text-purple-600"
                  href="https://firebase.google.com/policies/analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 visited:text-purple-600"
                  href="https://firebase.google.com/support/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase Crashlytics
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-5 text-left text-base text-gray-800">
            You should be aware that there are certain things that ABMR Holdings Pte Ltd will not take responsibility for. Certain functions of the app will
            require the app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but ABMR Holdings
            Pte Ltd cannot take responsibility for the app not working at full functionality if you don&apos;t have access to Wi-Fi, and you don&apos;t have any
            of your data allowance left.
          </div>
          <div className="mt-5 text-left text-base text-gray-800">
            If you&apos;re using the app outside of an area with Wi-Fi, you should remember that the terms of the agreement with your mobile network provider
            will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing
            the app, or other third-party charges. In using the app, you&apos;re accepting responsibility for any such charges, including roaming data charges
            if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the
            device on which you&apos;re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.
          </div>
          <div className="mt-5 text-left text-base text-gray-800">
            Along the same lines, ABMR Holdings Pte Ltd cannot always take responsibility for the way you use the app i.e. You need to make sure that your
            device stays charged - if it runs out of battery and you can&apos;t turn it on to avail the Service, ABMR Holdings Pte Ltd cannot accept
            responsibility.
          </div>
          <div className="mt-5 text-left text-base text-gray-800">
            With respect to ABMR Holdings Pte Ltd&apos;s responsibility for your use of the app, when you&apos;re using the app, it&apos;s important to bear in
            mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so
            that we can make it available to you. ABMR Holdings Pte Ltd accepts no liability for any loss, direct or indirect, you experience as a result of
            relying wholly on this functionality of the app.
          </div>
          <div className="mt-5 text-left text-base text-gray-800">
            At some point, we may wish to update the app. The app is currently available on Android - the requirements for the system(and for any additional
            systems we decide to extend the availability of the app to) may change, and you&apos;ll need to download the updates if you want to keep using the
            app. ABMR Holdings Pte Ltd does not promise that it will always update the app so that it is relevant to you and/or works with the Android version
            that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to
            stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any
            termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from
            your device.
          </div>

          <div className="mt-5 w-full text-left text-xl text-black">Changes to This Terms and Conditions</div>
          <div className="text-left text-base text-gray-800">
            We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you
            of any changes by posting the new Terms and Conditions on this page. These terms and conditions are effective as of 2022-12-21
          </div>
          <div className="mt-5 w-full text-left text-xl text-black">Contact Us</div>
          <div className="text-left text-base text-gray-800">
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at plugapp2022@gmail.com.
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
)

export default Home
