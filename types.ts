
export enum OpportunityStatus {
  PENDING = '未触达',
  CONTACTED = '已触达',
  PROGRESSING = '跟进中',
  CONVERTED = '已转化'
}

export interface Opportunity {
  id: string;
  companyName: string;
  address: string;
  status: OpportunityStatus;
  createTime: string;
}

export interface ProfileData {
  shareholder: string;
  productInfo: string;
  salesInfo: string;
  productionInfo: string;
  procurementInfo: string;
  financingInfo: string;
  investmentDemand: string;
  wealthDemand: string;
  accountDemand: string;
  location?: string;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  type: string;
  advantage: string;
  scenario: string;
  score: number;
}
