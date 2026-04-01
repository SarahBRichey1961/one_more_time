import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>one_more_time</title>
        <meta name="description" content="This app helps a person brainstorm about ideas to make money online based on their own hobbies, interests, resume and manifesto" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              one_more_time
            </h1>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-5xl font-bold text-white mb-4">This app helps a person brainstorm about ideas to make money online based on their own hobbies, interests, resume and manifesto</h2>
              <p className="text-xl text-slate-300 mb-6">Step 1) Ask questions about their hobbies, interests, upload resume (optional), copy manifesto in( optional) based on who they are.  
Step 2) AI takes all this info and determines 5 ideas for apps, 
step 3) with those ideas, ai does analysis from answers, skills, experience, education, awards, certifications on the existing market, who\'s filling that service or product and what gaps this new idea can address,  a
step 4) Analysis for every idea, 
Step 5) When purchasing, will need a page for pricing, if its a subscription or flat fee and how much
step 6) then the users must enter a phone number and when the app is built, that same phone number is on the purchase screen for the uses to zelle or venmo money to them, Capture the contact details, encrypt so only the seller can see them  for follow-up and or shipping.</p>
              <p className="text-lg text-slate-400 mb-8">Step 1) Ask questions about their hobbies, interests, upload resume (optional), copy manifesto in( optional) based on who they are.  
Step 2) AI takes all this info and determines 5 ideas for apps, 
step 3) with those ideas, ai does analysis from answers, skills, experience, education, awards, certifications on the existing market, who\'s filling that service or product and what gaps this new idea can address,  a
step 4) Analysis for every idea, 
Step 5) When purchasing, will need a page for pricing, if its a subscription or flat fee and how much
step 6) then the users must enter a phone number and when the app is built, that same phone number is on the purchase screen for the uses to zelle or venmo money to them, Capture the contact details, encrypt so only the seller can see them  for follow-up and or shipping.</p>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-lg transition-all">
                Get Started
              </button>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-slate-700/50 rounded-lg p-8 h-64 flex items-center justify-center">
              <p className="text-slate-300 text-center">Interactive Preview</p>
            </div>
          </div>

          {/* Features Section */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-indigo-500/50 transition-colors">
                  <div className="text-4xl mb-3">🚀</div>
                  <h4 className="text-xl font-bold text-white mb-2">Feature 1</h4>
                  <p className="text-slate-400">Set up the frontend structure and design of the app</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-indigo-500/50 transition-colors">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="text-xl font-bold text-white mb-2">Feature 2</h4>
                  <p className="text-slate-400">Implement user input forms for answering questions and uploading optional documents</p>
                </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-8">
              <h4 className="text-xl font-bold text-blue-300 mb-2">👥 For: People looking for work who need an income and also are want to make a difference or have a purpose</h4>
              <p className="text-blue-200">Built specifically for your target users</p>
            </div>
            <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-8">
              <h4 className="text-xl font-bold text-purple-300 mb-2">🚀 Next Steps</h4>
              <p className="text-purple-200">Customize this app and deploy your changes with git push!</p>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}