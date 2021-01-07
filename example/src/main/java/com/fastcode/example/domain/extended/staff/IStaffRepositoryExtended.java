package com.fastcode.example.domain.extended.staff;

import com.fastcode.example.domain.core.staff.IStaffRepository;
import org.springframework.stereotype.Repository;

@Repository("staffRepositoryExtended")
public interface IStaffRepositoryExtended extends IStaffRepository {
    //Add your custom code here
}
