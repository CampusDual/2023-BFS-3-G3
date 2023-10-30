package com.campusdual.backend.model.core.service;

import com.campusdual.backend.api.core.service.IEventService;
import com.campusdual.backend.model.core.dao.EventDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Lazy
@Service("EventService")
public class EventService implements IEventService {

    @Autowired
    private EventDao eventDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult eventQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(eventDao, keyMap, attrList);    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult eventInsert(Map<String, Object> attributes) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.eventDao, attributes);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public EntityResult eventUpdate(Map<String, Object> attributes, Map<String, Object> keyValues) throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.eventDao, attributes, keyValues);
    }

    @Override
    public EntityResult eventDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.eventDao, keyMap);
    }
}
