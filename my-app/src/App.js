import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Headers from "./header/headers";
import Navbar from "./component/nav/navbar";
import Slider from "./slider/sliders";
import ImageGallary from "./imagegallary/playersprofile";
import Events from "./news/newandevent";
import Team from "./contact/team";
import Contacts from "./contact/contacts";
import Videos from "./contact/videos";
import { SocketProvider } from "./usercontex/contextapi";
import Login from "./userprofile/userlogin/login";
import UserDetailsForm from "./userprofile/newuser/sign";
import CreatePassword from "./userprofile/createnewpas/newpas";
import Forgotpass from "./userprofile/sendfemail/forgotemail";
import ResponsiveDrawer from "./admin/dashboard/drawer";
import Vid_rca from "./admin/dashboard/videos/videosstructure";
import Image_RCA from "./admin/dashboard/imagegallary/dynamicimage";
import AllImage from "./imagegallary/imageGallary";
import Players_profile_dynamic from "./admin/dashboard/playersprofiledata/playersprofiledatadynamic";
import AdminDashboard from "./admin/dashboard/newmassagerequest/newsandevents";
import International from "./internationalplayers/international";
import Massage from "./massagefromuser/massage";

function App() {
  return (
    <>


    












      <BrowserRouter>
        <Helmet>
          <title>Royal Cricket Academy</title>
          <meta
            name="description"
            content="A cricket academy is one of the leading cricket academies in Nepal. We are dedicated to helping aspiring cricketers of all ages and skill levels reach their full potential. Our coaches have years of experience in every aspect of the game, and our classes are designed to help you develop the skills needed for success. Whether you’re looking for a competitive edge or just want to stay active, we have something for everyone."
          />
          {/* Add other meta tags as needed */}
        </Helmet>

        <SocketProvider>
          <Headers />
          <Navbar />

          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="/players-profile" element={<ImageGallary />} />
            <Route path="/news" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/User/login" element={<Login />} />
            <Route path="/newsupdate" element={<AdminDashboard />} />
            <Route
              path="/User/login/forgotpassword_email"
              element={<Forgotpass />}
            />
            <Route path="/User/login/sign" element={<UserDetailsForm />} />
            <Route
              path="/admin/Createpassword/:id/:token"
              element={<CreatePassword />}
            ></Route>
            <Route path="/drawer" element={<ResponsiveDrawer />}></Route>
            <Route path="/videos_dashboard" element={<Vid_rca />}></Route>
            <Route path="/Image_rca" element={<Image_RCA />}></Route>
            <Route path="/imageGallary" element={<AllImage />}></Route>
            <Route
              path="/Players_profile_dynamic"
              element={<Players_profile_dynamic />}
            ></Route>
            <Route path="/news-and-events" element={<AdminDashboard />}></Route>
            <Route path="/na" element={<International />}></Route>
            <Route path="/massages" element={<Massage />}></Route>
          </Routes>
        </SocketProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
