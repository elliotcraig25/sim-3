insert into sim_users (
    username,
    password
) values (
    ${user},
    ${pass}
) returning username, id;