"use client";

import { useState, useRef } from "react";
import { Check, Copy, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CODE_SNIPPET = `import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver(
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      // Optional: Stop observing once visible to prevent unnecessary renders
      if (entry.isIntersecting) observer.unobserve(element);
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return { elementRef, isIntersecting };
}`;

export function CodeShowcase() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      data-aos="fade-up"
      className="relative px-6 md:px-12 py-20 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#E8F0FE] dark:bg-[var(--google-blue-dark)]/15 text-[var(--google-blue)] dark:text-[var(--google-blue-dark)]">
              <Code2 size={24} strokeWidth={2} />
            </div>
            <div>
              <h2 className="font-black text-2xl text-[#202124] dark:text-[#E8EAED]">
                Under the Hood
              </h2>
              <p className="text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6]">
                Clean, Reusable, and Type-Safe React Hooks
              </p>
            </div>
          </div>
        </div>

        {/* Code Window */}
        <div 
          className="relative rounded-2xl md:rounded-3xl bg-[#282A36] border border-[#5F6368]/30 overflow-hidden shadow-2xl"
          style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
        >
          {/* Window Chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1E1F29] border-b border-[#5F6368]/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="text-xs font-mono text-[#6272A4] absolute left-1/2 -translate-x-1/2">
              useIntersectionObserver.ts
            </div>
            <button 
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-[#6272A4]/20 text-[#6272A4] hover:text-[#F8F8F2] transition-colors"
              title="Copy code"
            >
              {copied ? <Check size={16} className="text-[#50FA7B]" /> : <Copy size={16} />}
            </button>
          </div>

          {/* Code Content - Syntax highlighted via HTML/Tailwind */}
          <div className="p-4 md:p-6 overflow-x-auto text-sm md:text-base font-mono leading-relaxed text-[#F8F8F2]">
            <pre>
              <code>
<span className="text-[#FF79C6]">import</span> {'{'} <span className="text-[#8BE9FD]">useState</span>, <span className="text-[#8BE9FD]">useEffect</span>, <span className="text-[#8BE9FD]">useRef</span> {'}'} <span className="text-[#FF79C6]">from</span> <span className="text-[#F1FA8C]">'react'</span>;
<br/><br/>
<span className="text-[#FF79C6]">export</span> <span className="text-[#FF79C6]">function</span> <span className="text-[#50FA7B]">useIntersectionObserver</span>(
  <span className="text-[#FFB86C]">options</span>: <span className="text-[#8BE9FD]">IntersectionObserverInit</span> = {'{'} threshold: <span className="text-[#BD93F9]">0.1</span> {'}'}
) {'{'}
  <span className="text-[#FF79C6]">const</span> [isIntersecting, setIsIntersecting] = <span className="text-[#8BE9FD]">useState</span>(<span className="text-[#BD93F9]">false</span>);
  <span className="text-[#FF79C6]">const</span> elementRef = <span className="text-[#8BE9FD]">useRef</span>&lt;<span className="text-[#8BE9FD]">HTMLElement</span> | <span className="text-[#BD93F9]">null</span>&gt;(<span className="text-[#BD93F9]">null</span>);
<br/><br/>
  <span className="text-[#8BE9FD]">useEffect</span>(() =&gt; {'{'}
    <span className="text-[#FF79C6]">const</span> element = elementRef.<span className="text-[#8BE9FD]">current</span>;
    <span className="text-[#FF79C6]">if</span> (!element) <span className="text-[#FF79C6]">return</span>;
<br/><br/>
    <span className="text-[#FF79C6]">const</span> observer = <span className="text-[#FF79C6]">new</span> <span className="text-[#8BE9FD]">IntersectionObserver</span>(([entry]) =&gt; {'{'}
      <span className="text-[#8BE9FD]">setIsIntersecting</span>(entry.isIntersecting);
      <span className="text-[#6272A4]">{"// Optional: Stop observing once visible to prevent unnecessary renders"}</span>
      <span className="text-[#FF79C6]">if</span> (entry.isIntersecting) observer.<span className="text-[#8BE9FD]">unobserve</span>(element);
    {'}'}, options);
<br/><br/>
    observer.<span className="text-[#8BE9FD]">observe</span>(element);
<br/><br/>
    <span className="text-[#FF79C6]">return</span> () =&gt; {'{'}
      <span className="text-[#FF79C6]">if</span> (element) observer.<span className="text-[#8BE9FD]">unobserve</span>(element);
    {'}'};
  {'}'}, [options]);
<br/><br/>
  <span className="text-[#FF79C6]">return</span> {'{'} elementRef, isIntersecting {'}'};
{'}'}
              </code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}
