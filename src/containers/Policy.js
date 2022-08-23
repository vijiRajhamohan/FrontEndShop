import React from 'react'
 import { Link } from "react-router-dom";

function Policy() {
  return (
    <>
      <div
        className="container-fluid d-flex"
        style={{ backgroundColor: "#bf2758" }}
      >
        <Link to="./home.html" className="navbar-brand">
          <img src="./image/f.png" alt="" width="100" height="50" />
        </Link>
        <p className="text-white mb-1 fs-1">PETTY SHOP</p>

        <div>
          <Link
            to="/home"
            className="text-white position-absolute top-0 end-0 pt-3"
          >
            back to home
          </Link>
        </div>
      </div>

      <div className="container" style={{ background: "lightpink" }}>
        <div className="card m-5 p-10">
          <div
            className="card-header text-center "
            style={{ fontSize: "24px", backgroundColor: "pink" }}
          >
            Policy
          </div>
          <div className="card-body">
            <h5 className="card-title">Privacy Policy</h5>
            <p className="card-text">
              This Privacy Policy describes how Avenue Ecommerce Limited
              collects and processes your personal information through its
              website - www.PettiShop.in, the mobile application Online Grocery
              Shopping, features, (“Services”) to offer you services. We
              appreciate that you care about how your information is used and
              secured at our end. We value the trust you place in us, and are
              committed to handling your data with the required level of
              confidentiality. We strive to employ the highest standards for
              secure transactions and customer information privacy. When you use
              our Services you agree and consent to us collecting, storing,
              processing, transferring, and sharing your personal information
              (including sensitive personal information) with third parties or
              service providers for the purposes set out in this Privacy Policy.
              Please read this Privacy Policy to learn more. What Information We
              Collect: When you register on the Services, subscribe to our
              product updates, or fill out a form sharing your personal data, we
              may receive the following personally identifiable information
              about you: your name, mobile number, email address, delivery
              address, etc. We automatically collect and store certain types of
              information about your use of our Services including information
              about your interaction with the content and services available
              through our Services. We also use cookies (more on that below) and
              other unique identifiers, and we obtain certain types of
              information when your web browser or device accesses our Services.
              We may also collect additional information necessary to provide
              our services and to improve the quality of our services. We may
              receive information about you from other sources, such as updated
              delivery and address information from our carriers, which we may
              collect and store/use to deliver your next purchase more easily.
              We may also collect transaction related information, such as
              information about your payment method, shipping details and
              transaction amount. However, we do not collect your financial
              information shared with any payment gateway by you when you make a
              purchase through our Service. Such payment related services are
              provided by the concerned payment gateway, and to that extent the
              privacy policy of that gateway will apply. While shopping online
              you may sometimes access third party products or services. These
              links and offers on third party sites have separate and
              independent privacy policies. AEL has no responsibility or
              liability for the content and activities of these linked sites, or
              the information collected from you, if any. Cookies: A "cookie" is
              a small piece of information stored by a web server on a web
              browser so it can be later read back from that browser. Cookies
              are useful for enabling the browser to remember information
              specific to a given user. We place both permanent and temporary
              cookies in your computer's hard drive. The cookies do not contain
              any of your personally identifiable information. We use cookies to
              help us remember and process the items in your shopping cart,
              understand and save your preferences for future visits, keep track
              of advertisements and compile aggregate data about site traffic
              and site interaction so that we can offer better site experiences
              and tools in the future. How This Information Is Used: We use the
              information we collect to provide, develop, and improve the
              services that we offer to you. Specifically, this may include: •
              Taking and fulfilling orders, delivering products and services and
              processing payments. • Verifying and authenticating delivery of
              products. • Communicating with you including through email and
              phone about orders, products and services, and promotional offers.
              • Personalising and enhancing the shopping experience on our
              Service. • Addressing your queries and requests regarding our
              Service. • Administering other site features, such as promotions
              surveys and virtual assistant bots for customer assistance. How
              This Information Is Shared: We employ other companies and
              individuals to help support our Service, and perform functions on
              our behalf. For example, we partner with payment service providers
              to enable Users to make purchases of the products on our Service.
              We also partner with third party service providers to update you
              to provide order related information to Users, such as updates via
              SMS and email, and to manage and track consumer complaints.
              Additionally, we may also share your information to help
              investigate, prevent or take action regarding violations of the
              Site’s terms of use or to defend against legal claims or to comply
              with legal processes such as court orders or lawful requests or
              orders from legal authorities or law enforcement agencies
              requiring such disclosure. We do not sell, trade, or otherwise
              transfer to third parties your personally identifiable
              information. However, we may share non-personally identifiable
              information with other parties for marketing, advertising, or
              other uses as permitted by law. Retention of Information We retain
              your information collected for purposes described in this Privacy
              Policy and for other legitimate purposes, such as complying with
              legal obligations, enforcing and preventing violations of our
              Terms, or protecting or defending our rights, property and users.
              The period for which the information is retained is determined
              based on factors like the nature of the information, the reasons
              for its collection and processing, and legal obligations. Minors
              Accessing the Service AEL shall not be held liable for any
              transactions done on the Services by a minor. We do not sell
              products for purchase by children. We sell children's products for
              purchase by adults. Amendment to the Policy AEL reserves the right
              to change the Policy to its business requirements. We will post
              those changes on this site as and when modified. Such changes
              shall be effective immediately upon posting. Do frequent our
              Service to access the updated AEL Privacy Policy as modified from
              time to time.
            </p>

            <Link to="#" className="btn btn-primary">
              Email id: office@pettishop.in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Policy;