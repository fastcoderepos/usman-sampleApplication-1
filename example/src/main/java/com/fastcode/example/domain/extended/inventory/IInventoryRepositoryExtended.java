package com.fastcode.example.domain.extended.inventory;

import com.fastcode.example.domain.core.inventory.IInventoryRepository;
import org.springframework.stereotype.Repository;

@Repository("inventoryRepositoryExtended")
public interface IInventoryRepositoryExtended extends IInventoryRepository {
    //Add your custom code here
}
