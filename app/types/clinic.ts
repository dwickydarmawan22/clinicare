export interface Clinic {
    id: string;
    name: string;
    type: string;
    address: string;
    rating: number;
    totalReviews: number;
    images: string[];
    tabs: string[];
    specialists: Specialist[];
    facilities: Facility[];
    reviews: Review[];
  }
  
  export interface Specialist {
    id: number;
    name: string;
    specialization: string;
    rating: number;
    totalReviews: number;
    image: string;
  }
  
  export interface Facility {
    name: string;
    icon: string;
  }
  
  export interface Review {
    id: number;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }
  
  export interface ClinicTabsProps {
    clinic: Clinic;
  }