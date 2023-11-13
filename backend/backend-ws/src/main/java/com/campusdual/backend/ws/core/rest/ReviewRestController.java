package com.campusdual.backend.ws.core.rest;

import com.campusdual.backend.api.core.service.IReviewService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/reviews")
public class ReviewRestController extends ORestController<IReviewService> {
    @Autowired
    private IReviewService reviewService;
    @Override
    public IReviewService getService() {
        return this.reviewService;
    }
}
