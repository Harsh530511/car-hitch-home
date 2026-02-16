export interface Car {
  id: string;
  name: string;
  brand: string;
  type: "sedan" | "suv" | "hatchback" | "luxury" | "muv";
  seats: number;
  transmission: "Manual" | "Automatic";
  fuel: "Petrol" | "Diesel" | "Electric" | "CNG";
  pricePerDay: number;
  image: string;
  rating: number;
  available: boolean;
}

export interface BookingDetails {
  carId: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  dropoffDate: string;
  name: string;
  phone: string;
  email: string;
}

export const LOCATIONS = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
];

export const CAR_TYPES = [
  { value: "all", label: "All Types" },
  { value: "hatchback", label: "Hatchback" },
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "luxury", label: "Luxury" },
  { value: "muv", label: "MUV" },
];

export const CARS: Car[] = [
  { id: "1", name: "Swift", brand: "Maruti Suzuki", type: "hatchback", seats: 5, transmission: "Manual", fuel: "Petrol", pricePerDay: 1200, image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=250&fit=crop", rating: 4.3, available: true },
  { id: "2", name: "i20", brand: "Hyundai", type: "hatchback", seats: 5, transmission: "Automatic", fuel: "Petrol", pricePerDay: 1500, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop", rating: 4.5, available: true },
  { id: "3", name: "City", brand: "Honda", type: "sedan", seats: 5, transmission: "Automatic", fuel: "Petrol", pricePerDay: 2200, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=250&fit=crop", rating: 4.6, available: true },
  { id: "4", name: "Verna", brand: "Hyundai", type: "sedan", seats: 5, transmission: "Automatic", fuel: "Diesel", pricePerDay: 2000, image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop", rating: 4.4, available: true },
  { id: "5", name: "Creta", brand: "Hyundai", type: "suv", seats: 5, transmission: "Automatic", fuel: "Diesel", pricePerDay: 2800, image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=250&fit=crop", rating: 4.7, available: true },
  { id: "6", name: "Fortuner", brand: "Toyota", type: "suv", seats: 7, transmission: "Automatic", fuel: "Diesel", pricePerDay: 5500, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=250&fit=crop", rating: 4.8, available: true },
  { id: "7", name: "Mercedes E-Class", brand: "Mercedes-Benz", type: "luxury", seats: 5, transmission: "Automatic", fuel: "Petrol", pricePerDay: 12000, image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop", rating: 4.9, available: true },
  { id: "8", name: "Innova Crysta", brand: "Toyota", type: "muv", seats: 7, transmission: "Manual", fuel: "Diesel", pricePerDay: 3200, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&h=250&fit=crop", rating: 4.6, available: true },
  { id: "9", name: "Baleno", brand: "Maruti Suzuki", type: "hatchback", seats: 5, transmission: "Manual", fuel: "Petrol", pricePerDay: 1300, image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=250&fit=crop", rating: 4.2, available: true },
  { id: "10", name: "XUV700", brand: "Mahindra", type: "suv", seats: 7, transmission: "Automatic", fuel: "Diesel", pricePerDay: 3500, image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=250&fit=crop", rating: 4.7, available: false },
  { id: "11", name: "BMW 3 Series", brand: "BMW", type: "luxury", seats: 5, transmission: "Automatic", fuel: "Petrol", pricePerDay: 10000, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop", rating: 4.8, available: true },
  { id: "12", name: "Ertiga", brand: "Maruti Suzuki", type: "muv", seats: 7, transmission: "Manual", fuel: "CNG", pricePerDay: 2000, image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&h=250&fit=crop", rating: 4.3, available: true },
];

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}
