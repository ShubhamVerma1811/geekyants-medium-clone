Table users as U {
  uid uuid [pk]
  name varchar [not null]
  username text [not null]
  email text [not null, unique]
  password varchar [not null]
  created_at datetime
  updated_at datetime
}

Table posts as P {
  pid uuid [pk]
  author_id uuid [ref: < U.uid, not null]
  content text [not null]
  title  text [not null]
  claps int [not null, default: 0]
  created_at datetime
  updated_at datetime
}

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