package com.campusdual.backend.ws.core.rest;

import com.campusdual.backend.api.core.service.IPaymentService;
import com.campusdual.backend.api.core.service.IReviewService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/payments")
public class PaymentRestController extends ORestController<IPaymentService> {
        @Autowired
        private IPaymentService paymentService;
        @Override
        public IPaymentService getService() {
            return this.paymentService;
        }
    }


