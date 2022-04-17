export interface Post {
  PostId: string;
  Category: string[];
  Site: string;
  SiteUrl: string;
  Timestamp: Date;
  Title: string;
  Type: string;
  Views: number;
}

export interface PostItem {
  item: Post;
}
