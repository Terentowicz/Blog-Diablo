create database blogDiablo;
use blogDiablo;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
nomeUsuario varchar(45),
email varchar(45),
senha varchar(45)
);	

select * from usuario;
truncate usuario;
