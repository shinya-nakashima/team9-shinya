export type Tag = {
  id: number;
  name: string;
};

export type Lecture = {
  id: number;
  title: string;
  course_name: string;
  theme: string;
  target: string;
  format: string;
  price: number;
  image_url: string;
  url: string;
  created_at: string; // ISO 文字列として返ってくるはず
  updated_at: string;
  tags: Tag[];
};