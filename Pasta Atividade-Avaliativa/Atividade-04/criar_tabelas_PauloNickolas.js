
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database/DB_ATIVIDADE4.db', (error) => {
    if (error) console.log(error);
});

db.serialize(() => {
    db.run(`create table if not exists TB_ALUNOS (
        ID integer,
        NOME_ALUNO text,
        primary key (ID autoincrement))`, (error) => {
        if (error) console.log(error);  
    });
    
    db.run(`create table if not exists TB_DISCIPLINAS (
        ID integer,
        NOME_DISCIPLINA text,
        primary key (ID autoincrement))`, (error) => {
        if (error) console.log(error);
    });

    db.run(`create table if not exists TB_ALUNO_DISCIPLINA (
        NOTA integer not null,
        PERIODO integer not null,
        TB_ALUNOS_ID integer not null,
        TB_DISCIPLINAS_ID integer not null,
        FOREIGN KEY(TB_ALUNOS_ID) REFERENCES TB_ALUNOS(ID),
        FOREIGN KEY(TB_DISCIPLINAS_ID) REFERENCES TB_DISCIPLINAS(ID),
        PRIMARY KEY("TB_ALUNOS_ID","TB_DISCIPLINAS_ID"))`, (error) => {
        if (error) console.log(error);
    });
});
