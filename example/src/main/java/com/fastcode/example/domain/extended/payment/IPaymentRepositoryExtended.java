package com.fastcode.example.domain.extended.payment;

import com.fastcode.example.domain.core.payment.IPaymentRepository;
import org.springframework.stereotype.Repository;

@Repository("paymentRepositoryExtended")
public interface IPaymentRepositoryExtended extends IPaymentRepository {
    //Add your custom code here
}
