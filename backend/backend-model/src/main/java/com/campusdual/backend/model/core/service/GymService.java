package com.campusdual.backend.model.core.service;

import com.campusdual.backend.api.core.service.IGymService;
import com.campusdual.backend.model.core.dao.GymDao;
import com.campusdual.backend.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Lazy
@Service("GymService")
public class GymService implements IGymService {

    @Autowired
    private GymDao gymDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult gymInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.gymDao, attributes);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult gymUpdate(Map<String, Object> attributes, Map<String, Object> keyValues)
            throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.gymDao, attributes, keyValues);
    }

    @Override
    public EntityResult gymQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(gymDao, keyMap, attrList);
    }

    @Override
    public EntityResult gymDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.gymDao, keyMap);
    }

}
