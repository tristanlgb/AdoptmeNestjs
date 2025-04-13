export class CreatePetDto {
    name: string;
    specie: string;
    birthDate: Date;
    adopted?: boolean;
    image?: string;
  }
  