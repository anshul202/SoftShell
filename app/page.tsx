"use client";
import { useState } from 'react';
import quotes from '../constants/quotes'
import FormComponent from '@/components/forms/FormComponent';
import Headers from '@/components/headers/Headers';
import SlideInCard  from '@/components/SlideInCard/SlideInCard';

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(''); // State for the displayed quote
  const [isLoadingQuote, setIsLoadingQuote] = useState(false); // State for loading indicator
  const [quoteError, setQuoteError] = useState(''); // State for quote fetching errors

  const handleGetQuoteClick = async () => {
    setIsLoadingQuote(true);
    setCurrentQuote('');
    setQuoteError('');

    try {
      if (quotes && quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex].text;
        setCurrentQuote(selectedQuote);
      } else {
        setQuoteError('No quotes available.');
      }
    } catch (error) {
      console.log('Error fetching quote:', error);
      setQuoteError('Failed to select a quote.');
    } finally {
      setIsLoadingQuote(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <section className="bg-blue-600 text-white text-center py-20 px-4">
        <Headers title='SoftSell - Unlock the Value of Your Software Licenses' delay={0.8} size={'34'} />
        <Headers title='Sell your unused software licenses quickly and securely.' delay={2} size={'27'} />


        <button
          onClick={handleGetQuoteClick}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition mb-4"
          disabled={isLoadingQuote}
        >
          {isLoadingQuote ? 'Getting Quote...' : 'Get a Quote'}
        </button>

        {currentQuote && (
          <div className="mt-4 p-4 bg-blue-500 rounded-md shadow-lg max-w-md mx-auto">
            <p className="text-lg font-medium">{currentQuote}</p>
          </div>
        )}
        {quoteError && (
          <div className="mt-4 p-4 bg-red-400 text-white rounded-md shadow-lg max-w-md mx-auto">
            <p className="text-lg font-medium">{quoteError}</p>
          </div>
        )}
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <SlideInCard>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-6 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12h16M4 8h16M4 4h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload License</h3>
                <p>Submit your unused software license details.</p>
              </div>
            </SlideInCard>

            <SlideInCard>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-6 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m-3 0v6m0 0l-3-3m3 3l3-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Valuation</h3>
                <p>Receive a fair market value for your license.</p>
              </div>
            </SlideInCard>

            <SlideInCard>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-6 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
                <p>Secure payment directly to your account.</p>
              </div>
            </SlideInCard>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Testimonials</h2>
        <div className="space-y-8 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-4">&quot;SoftSell made selling my unused licenses so easy and profitable! Highly recommend.&quot;</p>
            <p className="font-semibold">- Jane Doe, IT Manager, TechCorp</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic mb-4">&quot;Excellent service and quick payments. SoftSell is my go-to platform for license selling.&quot;</p>
            <p className="font-semibold">- John Smith, Software Developer, DevSolutions</p>
          </div>
        </div>
      </section>


      <section className="bg-white py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <FormComponent />
      </section>
    </div>
  );
}

