package com.fastcode.example.domain.extended.film;

import com.fastcode.example.domain.core.film.IFilmRepository;
import org.springframework.stereotype.Repository;

@Repository("filmRepositoryExtended")
public interface IFilmRepositoryExtended extends IFilmRepository {
    //Add your custom code here
}
