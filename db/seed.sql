create table sim_users (
    id serial primary key,
    username varchar(20) not null,
    password varchar(200) not null,
    profile_pic varchar(100)
);