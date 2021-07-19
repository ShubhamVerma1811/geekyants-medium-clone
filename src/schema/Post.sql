Table posts as P {
  pid uuid [pk]
  author_id uuid [ref: < U.uid, not null]
  content text [not null]
  title  text [not null]
  claps int [not null, default: 0]
  created_at datetime
  updated_at datetime
}

Table posts_topics as PT {
  ptid uuid [pk]
  post_id uuid [ref: < P.pid, not null]
  topic_id uuid [ref: < T.tid, not null]
}