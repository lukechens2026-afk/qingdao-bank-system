
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../constants';

const STEPS = [
  { id: 1, title: '基础信息', fields: ['实控人姓名', '实控人占比', '主营业务经验'], hasOcr: true },
  { id: 2, title: '经营状况', fields: ['产品市场占有率', '产品毛利率', '淡旺季情况'] },
  { id: 3, title: '供销链路', fields: ['前五大客户占比', '回款周期', '采购结算方式'] },
  { id: 4, title: '生产能力', fields: ['设计产能', '实际年产', '人均产值'] },
  { id: 5, title: '融资现状', fields: ['现有融资品种', '贷款利率', '担保方式'] },
  { id: 6, title: '配套需求', fields: ['投资意向', '理财偏好', '员工代发需求'] }
];

const CollectionWizard: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({
    '1_0': '王建国',
    '1_1': '65%',
    '1_2': '20年'
  });
  const [loading, setLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/report');
    }, 1800);
  };

  const simulateOcr = () => {
    setIsScanning(true);
    // 纯模拟演示，不触发真实摄像头调用
    setTimeout(() => {
      setIsScanning(false);
      setFormData({
        ...formData,
        '1_0': '李创新',
        '1_1': '100%',
        '1_2': '12年'
      });
      alert('演示提示：已模拟识别证照信息并自动填充字段');
    }, 1500);
  };

  const step = STEPS[currentStep];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="bg-red-600 text-white p-4 pt-12">
        <div className="flex items-center justify-between mb-4">
           <button onClick={() => navigate(-1)} className="p-2 -ml-2">
             <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
           </button>
           <h2 className="text-lg font-bold">现场访谈画像</h2>
           <div className="text-xs bg-white/20 px-2 py-1 rounded-full">演示模式</div>
        </div>
        
        <div className="flex justify-between items-end mb-2">
          <span className="text-2xl font-bold">{step.title}</span>
          <span className="text-xs opacity-70">步骤 {currentStep + 1}/{STEPS.length}</span>
        </div>
        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-500 ease-out" 
            style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {step.hasOcr && (
            <button 
                onClick={simulateOcr}
                className="w-full py-4 border-2 border-dashed border-red-200 rounded-2xl bg-red-50 flex items-center justify-center gap-3 text-red-600 font-bold active:bg-red-100 transition-colors"
            >
                {isScanning ? (
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                        正在智能识别...
                    </div>
                ) : (
                    <>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        </svg>
                        模拟拍照识别 (OCR)
                    </>
                )}
            </button>
        )}

        {step.fields.map((field, idx) => (
          <div key={idx} className="space-y-2 group">
            <label className="text-sm font-bold text-gray-500 group-focus-within:text-red-600 transition-colors">{field}</label>
            <input
              type="text"
              className="w-full bg-gray-50 border-0 border-b-2 border-gray-100 rounded-none p-3 text-base focus:border-red-500 focus:bg-white transition-all outline-none font-medium"
              placeholder={`点击输入${field}`}
              value={formData[`${step.id}_${idx}`] || ''}
              onChange={(e) => setFormData({...formData, [`${step.id}_${idx}`]: e.target.value})}
            />
          </div>
        ))}

        <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-100 mt-8">
            <p className="text-[10px] text-yellow-700 leading-relaxed">
                <span className="font-bold">提示：</span>此为演示环境。在生产环境中，点击“OCR识别”将调起系统相机进行证照采集，并利用AI模型提取字段。
            </p>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="p-4 border-t flex gap-4 bg-white safe-area-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => currentStep === 0 ? navigate(-1) : setCurrentStep(currentStep-1)}
          className="px-6 py-4 rounded-2xl bg-gray-100 text-gray-500 font-bold active:bg-gray-200 transition-colors"
        >
          {currentStep === 0 ? '取消' : '回退'}
        </button>
        <button 
          onClick={handleNext}
          className="flex-1 py-4 rounded-2xl bg-red-600 text-white font-bold shadow-lg shadow-red-200 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          {loading ? '生成中...' : (currentStep === STEPS.length - 1 ? '完成采集并生成报告' : '确认并下一步')}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </button>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-red-600 flex flex-col items-center justify-center z-[100] text-white">
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center font-black text-2xl">BQD</div>
          </div>
          <p className="font-bold text-xl tracking-widest animate-pulse">智能引擎正在计算</p>
          <div className="mt-4 flex flex-col items-center opacity-70 space-y-1">
             <p className="text-xs">正在分析行业风险模型...</p>
             <p className="text-[10px]">匹配日照分行特色产品包</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionWizard;
