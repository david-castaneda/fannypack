type Prompt = {
  name: string;
  language: string;
  project: string;
  services: Array<Services>;
};

type Services = {
  value: string;
  name: string;
};
