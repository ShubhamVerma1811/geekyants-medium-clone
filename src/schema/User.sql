Table users as U {
  uid uuid [pk]
  name varchar [not null]
  username text [not null]
  email text [not null, unique]
  password varchar [not null]
  created_at datetime
  updated_at datetime
}