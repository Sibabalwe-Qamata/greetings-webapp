drop table;

create table users(
	id serial not null primary key,
	name char(100) not null,
	counter int

);