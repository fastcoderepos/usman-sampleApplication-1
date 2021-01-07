package com.fastcode.example.domain.extended.rental;

import com.fastcode.example.domain.core.rental.IRentalRepository;
import org.springframework.stereotype.Repository;

@Repository("rentalRepositoryExtended")
public interface IRentalRepositoryExtended extends IRentalRepository {
    //Add your custom code here
}
