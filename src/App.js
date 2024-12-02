import React from 'react';

const App = () => (
 <div className="min-h-screen bg-gray-900 py-12 px-4">
   <div className="max-w-5xl mx-auto">
     <h1 className="text-4xl font-bold text-center mb-12 text-white">코창서버 강화 시뮬레이터</h1>
     <div className="grid grid-cols-2 gap-6 mb-12">
       {[
         {title: '무기 강화', url: 'https://kochang-weapon-enhance.onrender.com/', img: '/weapon.png'},
         {title: '방어구 재련', url: 'https://kochang-armor-enhance.onrender.com/', img: '/armor.png'}, 
         {title: '반지 강화', url: 'https://kochang-ring-enhance.onrender.com/', img: '/ring.png'},
         {title: '곡괭이 강화', url: 'https://kochang-pick-enhance.onrender.com/', img: '/pick.png'}
       ].map((sim, i) => (
         <a 
           key={i} 
           href={sim.url} 
           target="_blank" 
           rel="noopener noreferrer" 
           className="block hover:scale-105 transition-transform"
         >
           <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-blue-500">
             <div className="aspect-w-16 aspect-h-9">
               <img 
                 src={sim.img} 
                 alt={sim.title} 
                 className="w-full h-48 object-contain p-2"
               />
             </div>
             <div className="p-4 text-center bg-gray-800">
               <h2 className="text-xl font-semibold text-white">{sim.title}</h2>
             </div>
           </div>
         </a>
       ))}
     </div>
     <div className="text-center space-y-2 text-gray-300">
       <p>이 사이트는 수익 창출 목적이 아니며 팬심으로 만들게 되었습니다.</p>
       <p>재밌게 즐겨주시고 스트리머분들 열심히 응원해주시면 감사하겠습니다.</p>
       <p>오로치 북해빙궁 자생문 흑코랑 봉황 아수라 화이팅!</p>
     </div>
   </div>
 </div>
);

export default App;