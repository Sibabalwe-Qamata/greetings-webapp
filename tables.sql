drop table users;
create table users(
	id serial not null primary key,
	name char(100) not null,
	counter int not null
);