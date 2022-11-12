import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import { Login } from '../Pages/Login_Signup/Login';
import { SignUp } from '../Pages/Login_Signup/Signup';
import Pricing from '../Pages/PricePage/Pricing';
import Reviews from '../Pages/ReviewPage/Review';
import BonTax from '../Pages/ProductPage/Tax_page';
import BonCash from '../Pages/ProductPage/Bonsai_Cash';
import FreeContractMaker from '../Pages/Templates/Pages/Contract-Templates/FreeContractMaker';
import DigitalMarketingContract from '../Pages/Templates/Pages/Contract-Templates/DigitalMarketing';
import GraphicDesignContract from '../Pages/Templates/Pages/Contract-Templates/GraphicDesign';
import SocialMediaContract from '../Pages/Templates/Pages/Contract-Templates/SocialMedia';
import AgreementTemplate from '../Pages/Templates/Pages/Agreement-Templates/InfluncerAgreement';
import BriefTemplate from '../Pages/Templates/Pages/Brief-Templates/DesignBrief';
import InvoiceTemplate from '../Pages/Templates/Pages/Invoice-Templates/SocialMediaInvoice';
import ProposalTemplate from '../Pages/Templates/Pages/Proposal-Templates/BusinessProposal';
import QuotesTemplate from '../Pages/Templates/Pages/Quote-Templates/WebDesignQuote';
import ScopeofWorkTemplate from '../Pages/Templates/Pages/ScopeOfWork/WebsiteDevScope';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/bonTax' element={<BonTax/>} />
        <Route path='/bonCash' element={<BonCash/>} />
        <Route path='/freeContract' element={<FreeContractMaker/>} />
        <Route path='/digitalMarketingContract' element={<DigitalMarketingContract/>} />
        <Route path='/graphicDesignContract' element={<GraphicDesignContract/>} />
        <Route path='/socialMediaContract' element={<SocialMediaContract/>} />
        <Route path='/agreementTemplate' element={<AgreementTemplate/>} />
        <Route path='/briefTemplate' element={<BriefTemplate/>} />
        <Route path='/invoiceTemplate' element={<InvoiceTemplate/>} />
        <Route path='/propasalTemplate' element={<ProposalTemplate/>} />
        <Route path='/quotesTemplate' element={<QuotesTemplate/>} />
        <Route path='/scopeOfWorkTemplate' element={<ScopeofWorkTemplate/>} />
    </Routes>
  )
};

export default AllRoutes;