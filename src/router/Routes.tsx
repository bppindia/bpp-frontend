import { About } from '@/components/About';
import Register from '@/components/form/Register';
import GetToKnow from '@/pages/about/GetToKnow';
import Goals from '@/pages/about/Goals';
import ForgetPin from '@/pages/auth/ForgetPin';
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from '@/pages/auth/Login';
import ResetPassword from '@/pages/auth/ResetPassword';
import ResetPin from '@/pages/auth/ResetPin';
import Contact from '@/pages/Contact/Contact';
import Home from '@/pages/Home/Home';
import Join from '@/pages/Membership/JoinNow';
import MembershipRenewal from '@/pages/Membership/MembershipRenewal';
import PageNotFound from '@/pages/NotFound/PageNotFound';
import PrivacyPolicy from '@/pages/PrivacyPolicy/PrivacyPolicy';
import CustomerService from '@/pages/support/CustomerService';
import TermsAndConditions from '@/pages/TermsAndCondtions/TermsAndCondtions';
import Vision from '@/pages/Vision/Vision';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/forgot-pin" element={<ForgetPin />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/reset-pin" element={<ResetPin />} />
                <Route path="/about/bpp-goals" element={<Goals />} />
                <Route path="/about/get-to-know-bpp" element={<GetToKnow />} />
                <Route path="/membership/join-now" element={<Join />} />
                <Route path="/membership/renewals" element={<MembershipRenewal />} />
                <Route path="/about" element={<About />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/customer-support" element={<CustomerService />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
