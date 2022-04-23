export interface Post {
  PostId: string;
  Category: string[];
  Site: string;
  SiteUrl: string;
  Timestamp: Date;
  Title: string;
  Type: string;
  Views: number;
  ImageUrl: string;
}

export interface PostItem {
  item: Post;
}
