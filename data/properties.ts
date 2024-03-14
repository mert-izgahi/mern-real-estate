import { faker } from "@faker-js/faker";

enum PropertyType {
    Apartment,
    House,
    Office,
    Store,
    Warehouse,
    Factory,
}

const image = () => {
    return `https://booking.webestica.com/assets/images/gallery/${Math.floor(
        Math.random() * 20
    )}.jpg`;
};

enum PropertyStatus {
    Rent,
    Sale,
}

enum Amenities {
    Wifi,
    Parking,
    Pool,
    Gym,
    Garden,
    Elevator,
    TV,
    AirConditioning,
    Heating,
    SecurityCamera,
    SmokeDetector,
    FireAlarm,
}

interface IProperty {
    id: string;
    title: string;
    description: string;
    type: PropertyType;
    status: PropertyStatus;
    location: string;
    price: number;
    period?: string;
    images: string[];
    amenities: Amenities[];
    beds: number;
    baths: number;
    area: number;
    rating: number;
    reviews: number;
    createdAt: Date;
    updatedAt: Date;
}

const property: IProperty = {
    id: faker.database.mongodbObjectId(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    type: PropertyType.Apartment,
    status: PropertyStatus.Rent,
    location: faker.location.city(),
    price: faker.number.int(),
    images: [image(), image(), image(), image(), image()],
    amenities: [],
    beds: faker.number.int({ min: 1, max: 5 }),
    baths: faker.number.int({ min: 1, max: 5 }),
    area: faker.number.int({ min: 50, max: 500 }),
    rating: faker.number.int({ min: 1, max: 5 }),
    reviews: faker.number.int({ min: 1, max: 5000 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
};

const properties: IProperty[] = new Array(10).fill(property);

export default properties;
