insert into simstuff(
    username,
    password
)values(
    $1,
    $2
)

returning username