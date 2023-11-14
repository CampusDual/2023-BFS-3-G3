package com.campusdual.backend.model.core.service;

import com.campusdual.backend.api.core.service.IEventService;
import com.campusdual.backend.api.core.service.IReviewService;
import com.campusdual.backend.model.core.dao.EventDao;
import com.campusdual.backend.model.core.dao.ReviewDao;
import com.campusdual.backend.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Lazy
@Service("ReviewService")
public class ReviewService implements IReviewService {

    @Autowired
    private ReviewDao reviewDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult reviewQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(reviewDao, keyMap, attrList);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult reviewInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.reviewDao, attributes);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult reviewUpdate(Map<String, Object> attributes, Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.reviewDao, attributes, keyValues);
    }

    @Override
    public EntityResult reviewDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.reviewDao, keyMap);
    }

    @Override
    public EntityResult myReviewQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        keyMap.put(UserDao.ID,auth.getName());
        return this.daoHelper.query(this.reviewDao, keyMap, attrList);
    }
}
