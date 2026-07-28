import React from "react";
import { Link } from "react-router-dom";
import {motion} from "motion/react";


export default function PrivacyPolicy() {
    return (
        <div className="pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 py-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
            <p className="text-slate-600 leading-relaxed">
                This is the privacy policy for our website. We are committed to protecting your personal information and your right to privacy. If you have any questions about this privacy policy or our practices with regard to your personal information, please contact us.
            </p>
        </div>
        <div className="max-w-7xl mx-auto px-8 sm:px-12 py-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
                The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect can include the following:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed mb-4">
                <li>Personal Information Provided by You. We collect names; phone numbers; email addresses; mailing addresses; job titles; usernames; passwords; contact preferences; and other similar information.</li>
                <li>Payment Information. We do not collect, store, or process any payment or financial details (such as credit card or bank details) on this website. All financial transactions and payments for our software are done offline securely via direct Bank Transfer (NEFT/RTGS/IMPS) after mutual discussion.</li>
            </ul>
        </div>
        <div className="max-w-7xl mx-auto px-8 sm:px-12 py-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
                We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed mb-4">
                <li>To facilitate the creation of and log into your account.</li>
                <li>To send you marketing communications and updates about our products and services.</li>
                <li>To improve our website and user experience.</li>
            </ul>
        </div>
        </div>
    );
}
