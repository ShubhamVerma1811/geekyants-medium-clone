Table topics as T {
  tid uuid [pk]
  name varchar [not null, unique]
  created_at datetime
  updated_at datetime
}

Table posts_topics as PT {
  ptid uuid [pk]
  post_id uuid [ref: < P.pid, not null]
  topic_id uuid [ref: < T.tid, not null]
}