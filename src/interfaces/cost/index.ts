import { BusinessInterface } from 'interfaces/business';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CostInterface {
  id?: string;
  amount: number;
  description?: string;
  business_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  user?: UserInterface;
  _count?: {};
}

export interface CostGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  business_id?: string;
  user_id?: string;
}
