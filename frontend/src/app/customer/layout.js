import CustomerHome from "@/components/customer/CustomerHome";
import CustomerNavbar from "@/components/customer/CustomerNavbar";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body   >
         {/* <CustomerNavbar/>
         <CustomerHome/> */}
        {children}
        </body>
      </html>
    );
  }