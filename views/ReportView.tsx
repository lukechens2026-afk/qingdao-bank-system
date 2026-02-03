
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../constants';

const ReportView: React.FC = () => {
  const navigate = useNavigate();

  const matchingProducts = [
    { name: '外贸管家', score: 98, reason: '该企业出口占比达60%，极高匹配', type: '结算类' },
    { name: '科技易贷', score: 92, reason: '属于省级高新技术企业', type: '融资类' },
    { name: '科创快贷', score: 85, reason: '符合初创型信用贷款标准', type: '融资类' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-red-600 text-white p-4 pt-12 pb-8 sticky top-0 z-10">
        <div className="flex items-center gap-2 mb-4">
           <button onClick={() => navigate('/home')}>
             <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current"><path d="m15 18-6-6 6-6" strokeWidth="2"/></svg>
           </button>
           <h2 className="text-lg font-bold">画像分析报告</h2>
        </div>
        <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-red-600 text-2xl font-black">
            92
          </div>
          <div>
            <p className="text-sm font-medium">综合评分：健康度高</p>
            <p className="text-[10px] opacity-70">报告生成时间：2024-10-24 14:30</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 -mt-4 space-y-6">
        {/* Profile Summary */}
        <section className="bg-white rounded-xl p-5 shadow-sm space-y-4">
            <h3 className="font-bold text-gray-800 border-l-4 border-red-600 pl-3">企业画像摘要</h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                    <span className="text-gray-400">实控人行业经验</span>
                    <p className="font-medium text-gray-800">15年+</p>
                </div>
                <div className="space-y-1">
                    <span className="text-gray-400">主要销售模式</span>
                    <p className="font-medium text-gray-800">出口/赊销</p>
                </div>
                <div className="space-y-1">
                    <span className="text-gray-400">生产负荷</span>
                    <p className="font-medium text-gray-800">85% 满产</p>
                </div>
                <div className="space-y-1">
                    <span className="text-gray-400">融资需求</span>
                    <p className="font-medium text-gray-800">强（扩大生产）</p>
                </div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-700 leading-relaxed italic">
                    “该客户属于典型的高速成长期科技制造企业，面临出口回款账期不稳定的压力，建议侧重推荐外币结算避险工具及流动性贷款。”
                </p>
            </div>
        </section>

        {/* Product Recommendations */}
        <section className="space-y-3">
            <h3 className="font-bold text-gray-800 px-1">智能匹配产品 ({matchingProducts.length})</h3>
            {matchingProducts.map((p, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-transparent hover:border-red-100 transition-all flex gap-4">
                    <div className="flex flex-col items-center justify-center w-12 border-r pr-4 border-gray-100">
                        <span className="text-xs text-gray-400">匹配</span>
                        <span className="text-lg font-bold text-red-600">{p.score}</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-bold">{p.name}</h4>
                            <span className="text-[10px] text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">{p.type}</span>
                        </div>
                        <p className="text-[10px] text-gray-500 line-clamp-2">{p.reason}</p>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            ))}
        </section>

        <section className="bg-white rounded-xl p-5 shadow-sm">
             <h3 className="font-bold text-gray-800 mb-4 border-l-4 border-red-600 pl-3">下一步行动建议</h3>
             <ul className="text-xs text-gray-600 space-y-3 list-disc pl-4">
                 <li>安排“外贸管家”产品经理于本周五共同拜访。</li>
                 <li>收集企业过去一年的报关单数据。</li>
                 <li>协助企业开通企业网银，准备授信申请资料。</li>
             </ul>
        </section>
      </div>

      {/* Action Bar */}
      <div className="p-4 bg-white border-t flex gap-3 safe-area-bottom">
          <button className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium active:bg-gray-50 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" strokeWidth="2"/></svg>
            分享报告
          </button>
          <button className="flex-1 py-3 rounded-xl bg-red-600 text-white font-bold active:scale-95 shadow-lg shadow-red-100">
            进入报审流程
          </button>
      </div>
    </div>
  );
};

export default ReportView;
